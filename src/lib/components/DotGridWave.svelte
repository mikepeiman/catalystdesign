<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let dotColor = 'rgba(0, 0, 0, 0.1)';
	export let waveColorStart = 'text-blue-500';
	export let waveColorEnd = 'text-purple-500';
	export let dotSpacing = 20;
	export let dotRadius = 1;
	export let waveDuration = 19000;
	export let maxScale = 5;
	export let waveVariation = 0.2; // Degree of variation in wave origin (0-1)

	let canvas;
	let ctx;
	let width;
	let height;
	let animationId;
	let waveOriginAngle = 0;

	function getColorFromClass(colorClass) {
		const tempDiv = document.createElement('div');
		tempDiv.className = colorClass;
		document.body.appendChild(tempDiv);
		const color = window.getComputedStyle(tempDiv).color;
		document.body.removeChild(tempDiv);
		return color;
	}

	function interpolateColor(color1, color2, factor) {
		const c1 = color1.match(/\d+/g).map(Number);
		const c2 = color2.match(/\d+/g).map(Number);
		const result = c1.map((c, i) => Math.round(c + factor * (c2[i] - c)));
		return `rgba(${result.join(',')},${0.3})`;  // Adding fixed 0.3 alpha
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
			const progress = (elapsed % waveDuration) / waveDuration;

			ctx.clearRect(0, 0, width, height);

			// Update wave origin angle
			waveOriginAngle = (waveOriginAngle + waveVariation * Math.PI / 180) % (2 * Math.PI);

			// Calculate wave origin point
			const originX = width / 2 + Math.cos(waveOriginAngle) * width / 2;
			const originY = height / 2 + Math.sin(waveOriginAngle) * height / 2;

			for (let x = 0; x < width; x += dotSpacing) {
				for (let y = 0; y < height; y += dotSpacing) {
					const dx = x - originX;
					const dy = y - originY;
					const distance = Math.sqrt(dx * dx + dy * dy);
					const maxDistance = Math.sqrt(width * width + height * height);
					const delay = distance / maxDistance;

					let scale = 1;

					if (progress > delay && progress < delay + 0.1) {
						const localProgress = (progress - delay) / 0.1;
						scale = 1 + (maxScale - 1) * Math.sin(localProgress * Math.PI);

						const waveColor = interpolateColor(startColor, endColor, localProgress);

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