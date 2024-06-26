<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let dotColor = 'rgba(0, 0, 0, 0.1)';
	export let waveColorStart = 'text-blue-500';
	export let waveColorEnd = 'text-purple-500';
	export let waveOpacityStart = 0.3;
	export let waveOpacityEnd = 0.7;
	export let dotSpacing = 20;
	export let dotRadius = 1;
	export let waveDuration = 19000;
	export let maxScale = 5;
	export let numWaves = 3;

	let canvas;
	let ctx;
	let width;
	let height;
	let animationId;
	let mouseX = 0;
	let mouseY = 0;

	function getColorFromClass(colorClass) {
		const tempDiv = document.createElement('div');
		tempDiv.className = colorClass;
		document.body.appendChild(tempDiv);
		const color = window.getComputedStyle(tempDiv).color;
		document.body.removeChild(tempDiv);
		return color;
	}

	function interpolateColor(color1, color2, opacityStart, opacityEnd, factor) {
		const c1 = color1.match(/\d+/g).map(Number);
		const c2 = color2.match(/\d+/g).map(Number);
		const result = c1.map((c, i) => Math.round(c + factor * (c2[i] - c)));
		const opacity = opacityStart + factor * (opacityEnd - opacityStart);
		return `rgba(${result.join(',')},${opacity})`;
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);
		window.addEventListener('mousemove', handleGlobalMouseMove);
		animateDots();
	});

	if (browser) {
		onDestroy(() => {
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('mousemove', handleGlobalMouseMove);
			cancelAnimationFrame(animationId);
		});
	}

	function resizeCanvas() {
		width = canvas.width = canvas.offsetWidth;
		height = canvas.height = canvas.offsetHeight;
		mouseX = width / 2;
		mouseY = height / 2;
	}

	function handleGlobalMouseMove(event) {
		const rect = canvas.getBoundingClientRect();
		mouseX = event.clientX - rect.left;
		mouseY = event.clientY - rect.top;

		// Clamp mouse position to canvas boundaries
		mouseX = Math.max(0, Math.min(mouseX, width));
		mouseY = Math.max(0, Math.min(mouseY, height));
	}


	function animateDots() {
		const startTime = Date.now();
		const startColor = getColorFromClass(waveColorStart);
		const endColor = getColorFromClass(waveColorEnd);

		function animate() {
			const currentTime = Date.now();
			const elapsed = currentTime - startTime;
			
			ctx.clearRect(0, 0, width, height);

			for (let waveIndex = 0; waveIndex < numWaves; waveIndex++) {
				const waveProgress = ((elapsed / waveDuration) + (waveIndex / numWaves)) % 1;

				for (let x = 0; x < width; x += dotSpacing) {
					for (let y = 0; y < height; y += dotSpacing) {
						const dx = x - mouseX;
						const dy = y - mouseY;
						const distance = Math.sqrt(dx * dx + dy * dy);
						const maxDistance = Math.sqrt(width * width + height * height);
						const delay = distance / maxDistance;

						let scale = 1;

						if (waveProgress > delay && waveProgress < delay + 0.1) {
							const localProgress = (waveProgress - delay) / 0.1;
							scale = 1 + (maxScale - 1) * Math.sin(localProgress * Math.PI);

							const hueProgress = distance / maxDistance;
							const waveColor = interpolateColor(startColor, endColor, waveOpacityStart, waveOpacityEnd, hueProgress);

							ctx.beginPath();
							ctx.arc(x, y, dotRadius * scale, 0, Math.PI * 2);
							ctx.fillStyle = waveColor;
							ctx.fill();
						} else {
							ctx.beginPath();
							ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
							ctx.fillStyle = dotColor;
							ctx.fill();
						}
					}
				}
			}

			animationId = requestAnimationFrame(animate);
		}

		animate();
	}
</script>


<canvas bind:this={canvas} class="absolute inset-0 w-full h-full pointer-events-none"></canvas>

<style>
	canvas {
		pointer-events: auto;
	}
</style>