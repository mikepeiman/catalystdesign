<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let dotColor = 'rgba(0, 0, 0, 0.1)';
	export let waveColorStart = 'text-blue-500';
	export let waveColorEnd = 'text-purple-500';
	export let waveOpacityStart = 0.3;
	export let waveOpacityEnd = 0.3;
	export let dotSpacing = 20;
	export let dotRadius = 1;
	export let waveDuration = 19000;
	export let maxScale = 5;
	export let numWaves = 1;

	let canvas;
	let ctx;
	let width;
	let height;
	let animationId;

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
		animateDots();
	});

	if (browser) {
		onDestroy(() => {
			window.removeEventListener('resize', resizeCanvas);
			cancelAnimationFrame(animationId);
		});
	}

	function resizeCanvas() {
		width = canvas.width = canvas.offsetWidth;
		height = canvas.height = canvas.offsetHeight;
		drawDots();
	}

	function drawDots() {
		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = dotColor;

		for (let x = 0; x < width; x += dotSpacing) {
			for (let y = 0; y < height; y += dotSpacing) {
				ctx.beginPath();
				ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
				ctx.fill();
			}
		}
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
						const dx = x - width / 2;
						const dy = y - height / 2;
						const distance = Math.sqrt(dx * dx + dy * dy);
						const maxDistance = Math.sqrt(width * width + height * height) / 2;
						const delay = distance / maxDistance;

						let scale = 1;

						if (waveProgress > delay && waveProgress < delay + 0.1) {
							const localProgress = (waveProgress - delay) / 0.1;
							scale = 1 + (maxScale - 1) * Math.sin(localProgress * Math.PI);

							// Gradual hue and opacity change
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

<canvas bind:this={canvas} class="absolute inset-0 w-full h-full"></canvas>

<style>
	canvas {
		pointer-events: none;
	}
</style>