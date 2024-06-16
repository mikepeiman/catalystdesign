<!-- DarkModeToggle.svelte -->
<script>
	import { browser } from '$app/environment';
	import { IconSun, IconMoon } from '@tabler/icons-svelte';

	let isDarkMode = false;

	if (browser) {
		isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			isDarkMode = e.matches;
		});
	}

	function toggleDarkMode() {
		console.log(`🚀 ~ toggleDarkMode ~ toggleDarkMode:`, `toggleDarkMode`);
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle('dark');
	}
</script>

<button
	on:click={toggleDarkMode}
	class=" px-3 py-2 rounded-md"
>
	<span class="ml-2">
		{#if isDarkMode}
			<button id="theme-toggle" class="px-4 py-2 bg-blue-500 text-white rounded">
				<IconSun /></button
			>
		{:else}
			<button id="theme-toggle" class="px-4 py-2 bg-blue-500 text-white rounded">
				<IconMoon /></button
			>
		{/if}
	</span>
</button>
