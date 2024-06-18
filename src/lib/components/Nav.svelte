<script>
	import DarkModeToggle from './DarkModeToggle.svelte';
	import GradientButton from '$lib/components/GradientButton.svelte';
	let items = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{ name: 'Services', url: '/services' },
		{ name: 'Portfolio', url: '/portfolio' },
		{ name: 'Contact', url: '/contact' }
	];

	import { onMount } from 'svelte';

	let prevScrollpos;
	let navbar;

	function handleScroll() {
		const currentScrollPos = window.pageYOffset;

		if (prevScrollpos > currentScrollPos) {
			navbar.style.top = '0'; // Show the navbar
		} else {
			navbar.style.top = '-100px'; // Hide the navbar
		}

		prevScrollpos = currentScrollPos;
	}

	onMount(() => {
		prevScrollpos = window.pageYOffset;
		// uncomment below to make navbar show/hide on scroll
		// window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav
	bind:this={navbar}
	class="navbar min-h-[var(--topnav-height)] text-black dark:text-white flex justify-between items-center font-inter bg-white/50 dark:bg-[#050F28]/50 sticky top-0 z-50  "
>
	<div class="flex items-center justify-center h-full mx-4 left-10">
		<img src="/images/logo-blue.svg" alt="Logo" class="h-12 self-center" />
		<h3 class=" ml-3 text-lg font-bold">Catalyst</h3>
	</div>
	<div class=" flex justify-around items-center">
		<ul class="flex justify items-center">
			{#each items as item}
				<li class="px-4 py-2 text-md font-medium">
					<a href={item.url} class=" hover:text-gray-300">{item.name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="right flex h-full items-center mx-4 w-48">
		<DarkModeToggle />
		<GradientButton
			href="https://catalyst.bloom.io/login"
			class="mr-4"
			gradientAngle="90deg"
			gradientColors={[
				{ color: 'var(--cyan-600)', stop: 0 },
				{ color: 'var(--blue-700)', stop: 100 }
			]}
			gradientHoverColors={[
				{ color: 'var(--cyan-500)', stop: 0 },
				{ color: 'var(--blue-600)', stop: 100 }
			]}
			>Login</GradientButton
		>
	</div>
</nav>

<style>
	:root {
		--topnav-height: 6vh;
	}
	.navbar {
		box-shadow:
			0 4px 10px rgba(255, 0, 0, 0.4),
			0 0 15px rgba(0, 0, 255, 0.6);
		backdrop-filter: blur(10px); /* Apply blur effect */
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		transition-duration: 0;
	}
</style>
