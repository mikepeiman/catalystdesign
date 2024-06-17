<script>
	export let gradientAngle = '45deg'; // Default angle (45deg)
	export let gradientAngleHover = '45deg'; // Default hover angle (45deg)
	export let gradientColors = [
		{ color: '#ff7a00', stop: 0 },
		{ color: '#ff7a00', stop: 50 },
		{ color: '#00b5d8', stop: 100 }
	]; // Default colors (orange-900, orange-900, cyan-500)
	export let gradientHoverColors = [
		{ color: '#fd4ed8', stop: 0 },
		{ color: '#1d4ef8', stop: 50 },
		{ color: '#c2410c', stop: 100 }
	]; // Default hover colors (blue-700, blue-700, orange-700)

	let gradientCss = `linear-gradient(${gradientAngle}, ${gradientColors.map((c) => `${c.color} ${c.stop}%`).join(', ')})`;
	let gradientHoverCss = `linear-gradient(${gradientAngleHover}, ${gradientHoverColors.map((c) => `${c.color} ${c.stop}%`).join(', ')})`;
	console.log(`🚀 ~ gradientCss:`, gradientCss)
	console.log(`🚀 ~ gradientHoverCss:`, gradientHoverCss)
</script>

<button
	class="gradient-button rounded-md inline-flex items-center justify-center w-full h-12"
	style={`--gradient-css: ${gradientCss}; --gradient-hover-css: ${gradientHoverCss};`}
>
	<slot></slot>
</button>

<style>
	.gradient-button {
		position: relative;
		display: inline-block;
		text-decoration: none;
		border: none;
		cursor: pointer;
		background-image: var(--gradient-css);
		transition: all 0.3s ease;
		z-index: 1;
	}

	.gradient-button::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: var(--gradient-hover-css);
		z-index: -1;
		transition: all 0.3s ease;
		opacity: 0;
	}

	.gradient-button:hover::before {
		opacity: 1;
	}
</style>
