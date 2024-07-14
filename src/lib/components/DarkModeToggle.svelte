<!-- DarkModeToggle.svelte -->
<script>
	import { browser } from '$app/environment';
	import { IconSun, IconMoon } from '@tabler/icons-svelte';

	let isDarkMode = true;

	if (browser) {
		isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			isDarkMode = e.matches;
		});
	}

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle('dark');
	}
</script>

<span class="lg:mr-8 flex items-center">
	{#if isDarkMode}
		<button
			id="theme-toggle"
			on:click={toggleDarkMode}
			class=" bg-none text-black rounded-sm"
		>
			<IconSun /></button
		>
	{:else}
		<button
			id="theme-toggle"
			on:click={toggleDarkMode}
			class="flex items-center  text-white bg-none  rounded-sm"
		>
			<IconMoon /></button
		>
	{/if}
</span>
