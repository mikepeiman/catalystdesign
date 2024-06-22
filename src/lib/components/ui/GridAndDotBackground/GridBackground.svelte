<script lang="ts">
	export let showFade: boolean = true;
	export let opacityDark: number = 75;
	export let opacityLight: number = 15;

	export let stop1: string = 'var(--color-cyan-300)';
	export let stop2: string = 'black';
</script>

<div
	class="relative flex flex-col w-full h-full items-center justify-center bg-white bg-grid-black/[{opacityLight}] dark:bg-black dark:bg-grid-cyan-300/20"
>
	<!-- Radial gradient for the container to give a faded look -->
	{#if showFade}
		<div
			class="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark: dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
		></div>
	{/if}
	<slot />
</div>

<!-- [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -->
