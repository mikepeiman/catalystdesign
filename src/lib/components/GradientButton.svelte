<script>
	import { twMerge } from 'tailwind-merge';
	export let gradientAngle = '45deg'; // Default angle (45deg)
	export let gradientAngleHover = gradientAngle; // Default hover angle (45deg)
	export let gradientColors = [
		{ color: 'var(--catalyst-600)', stop: 0 },
		{ color: 'var(--purple-800)', stop: 50 },
		{ color: 'var(--catalyst-800)', stop: 100 }
	]; // Default colors (orange-900, orange-900, catalyst-500)
	export let gradientHoverColors = [
		{ color: 'var(--catalyst-500)', stop: 0 },
		{ color: 'var(--purple-600)', stop: 50 },
		{ color: 'var(--catalyst-700)', stop: 100 }
	]; // Default hover colors (blue-700, blue-700, orange-700)
	export let hoverScale = 1.025; // Default hover scale (1.05)
	let gradientCss = `linear-gradient(${gradientAngle}, ${gradientColors.map((c) => `${c.color} ${c.stop}%`).join(', ')})`;
	let gradientHoverCss = `linear-gradient(${gradientAngleHover}, ${gradientHoverColors.map((c) => `${c.color} ${c.stop}%`).join(', ')})`;
	let buttonClass = twMerge(
		'gradient-button rounded-md inline-flex items-center justify-center w-full h-12 text-white dark:text-white',
		$$props.class
	);
</script>

<button
	{...$$restProps}
	class={buttonClass}
	style={`--hover-scale: ${hoverScale}; --gradient-css: ${gradientCss}; --gradient-hover-css: ${gradientHoverCss};`}
>
	<slot></slot>
</button>

<style>
	.gradient-button {
		position: relative;
		display: flex;
		text-decoration: none;
		border: none;
		cursor: pointer;
		background-image: var(--gradient-css);
		transition: all 0.3s ease;
		z-index: 1;
		text-wrap: none;
	}
	.gradient-button:hover {
		position: relative;
		display: flex;
		text-decoration: none;
		border: none;
		cursor: pointer;
		background-image: var(--gradient-css);
		transition: all 0.3s ease;
		z-index: 1;
		transform: scale(var(--hover-scale));
	}

	.gradient-button::before {
		content: '';
		position: absolute;
		border-radius: inherit;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: var(--gradient-hover-css);
		z-index: -1;
		transform: scale(var(--hover-scale));
		transition: all 0.3s ease;
		opacity: 0;
	}

	.gradient-button:hover::before {
		opacity: 1;
	}
</style>
