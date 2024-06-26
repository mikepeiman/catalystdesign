<script>
	export let gradientAngle = '45deg'; // Default angle (45deg)
	export let gradientAngleHover = '45deg'; // Default hover angle (45deg)
	export let gradientStart = '#ff7a00'; // Default starting color (orange-900)
    export let gradientVia = '#ff7a00'; // Default via color (orange-900)
	export let gradientEnd = '#00b5d8'; // Default ending color (catalyst-500)
	export let gradientHoverStart = '#1d4ed8'; // Default hover starting color (blue-700)
    export let gradientHoverVia = '#1d4ed8'; // Default hover via color (blue-700)
	export let gradientHoverEnd = '#c2410c'; // Default hover ending color (orange-700)
</script>

<button
	class="gradient-button rounded-md inline-flex items-center justify-center w-full h-12"
	style="
    --gradient-angle: {gradientAngle}; 
    --gradient-angle-hover: {gradientAngleHover}; 
    --gradient-start: {gradientStart}; 
    --gradient-via: {gradientVia};
    --gradient-end: {gradientEnd}; 
    --gradient-hover-start: {gradientHoverStart}; 
    --gradient-hover-via: {gradientHoverVia};
    --gradient-hover-end: {gradientHoverEnd};"
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
		background-image: linear-gradient(
			var(--gradient-angle),
			var(--gradient-start) 0%,
            var(--gradient-via) 50%,
			var(--gradient-end) 100%
		);
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
		background-image: linear-gradient(
			var(--gradient-angle-hover),
			var(--gradient-hover-start) 0%,
            var(--gradient-hover-via) 50%,
			var(--gradient-hover-end)
		);
		z-index: -1;
		transition: all 0.3s ease;
		opacity: 0;
	}

	.gradient-button:hover::before {
		opacity: 1;
	}
</style>
