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
	export let useMouseInteraction = true;
	export let waveOrigin = { x: 50, y: 50 }; // Default to center
	export let consecutiveWaves = 1;

	let canvas;
	let ctx;
	let width;
	let height;
	let animationId;
	let originX = 0;
	let originY = 0;

	$: updateOrigin(waveOrigin, width, height);

	function updateOrigin({ x, y }, canvasWidth, canvasHeight) {
		originX = (x / 100) * canvasWidth;
		originY = (y / 100) * canvasHeight;
	}

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
		if (useMouseInteraction) {
			window.addEventListener('mousemove', handleGlobalMouseMove);
		}
		animateDots();
	});

	if (browser) {
		onDestroy(() => {
			window.removeEventListener('resize', resizeCanvas);
			if (useMouseInteraction) {
				window.removeEventListener('mousemove', handleGlobalMouseMove);
			}
			cancelAnimationFrame(animationId);
		});
	}

	function resizeCanvas() {
		width = canvas.width = canvas.offsetWidth;
		height = canvas.height = canvas.offsetHeight;
		updateOrigin(waveOrigin, width, height);
	}

	function handleGlobalMouseMove(event) {
		const rect = canvas.getBoundingClientRect();
		originX = event.clientX - rect.left;
		originY = event.clientY - rect.top;

		// Clamp origin position to canvas boundaries
		originX = Math.max(0, Math.min(originX, width));
		originY = Math.max(0, Math.min(originY, height));
	}

	function animateDots() {
		const startTime = Date.now();
		const startColor = getColorFromClass(waveColorStart);
		const endColor = getColorFromClass(waveColorEnd);

		function animate() {
			const currentTime = Date.now();
			const elapsed = currentTime - startTime;

			ctx.clearRect(0, 0, width, height);

			const maxDistance = Math.sqrt(width * width + height * height);
			const waveWidth = maxDistance * 0.1;

			for (let x = 0; x < width; x += dotSpacing) {
				for (let y = 0; y < height; y += dotSpacing) {
					const dx = x - originX;
					const dy = y - originY;
					const distance = Math.sqrt(dx * dx + dy * dy);

					let scale = 1;
					let dotFillStyle = dotColor;

					for (let waveIndex = 0; waveIndex < numWaves; waveIndex++) {
						const baseWaveProgress = (elapsed / waveDuration + waveIndex / numWaves) % 1;
						const waveProgress = baseWaveProgress * (1 + 1 / consecutiveWaves);

						const waveRadius = waveProgress * maxDistance;
						const distanceFromWave = Math.abs(distance - waveRadius);

						if (distanceFromWave < waveWidth && distance <= waveRadius) {
							const localProgress = 1 - distanceFromWave / waveWidth;
							const waveScale = 1 + (maxScale - 1) * Math.sin(localProgress * Math.PI);

							// Gradually increase the wave effect as it expands
							const expansionFactor = Math.min(1, waveRadius / (maxDistance * 0.1));
							const adjustedScale = 1 + (waveScale - 1) * expansionFactor;

							if (adjustedScale > scale) {
								scale = adjustedScale;
								const hueProgress = distance / maxDistance;
								const colorFactor = hueProgress * expansionFactor;
								dotFillStyle = interpolateColor(
									startColor,
									endColor,
									waveOpacityStart,
									waveOpacityEnd,
									colorFactor
								);
							}
						}
					}

					ctx.beginPath();
					ctx.arc(x, y, dotRadius * scale, 0, Math.PI * 2);
					ctx.fillStyle = dotFillStyle;
					ctx.fill();
				}
			}

			animationId = requestAnimationFrame(animate);
		}

		animate();
	}
</script>

<canvas bind:this={canvas} class="absolute inset-0 w-full h-full pointer-events-none p-[2rem]"></canvas>
