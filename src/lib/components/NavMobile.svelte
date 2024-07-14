<script>
	import DarkModeToggle from './DarkModeToggle.svelte';
	import GradientButton from '$lib/components/GradientButton.svelte';
	import { IconMenu, IconX } from '@tabler/icons-svelte';
	let items = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{ name: 'Services', url: '/services' },
		{ name: 'Portfolio', url: '/portfolio' },
		{ name: 'Contact', url: '/contact' }
	];

	let navbarOpen = false;

	function toggleNavbar() {
		navbarOpen = !navbarOpen;
	}
</script>

<nav
	class="navbar min-h-[var(--topnav-height)] max-w-screen text-black dark:text-white flex justify-between items-center font-inter bg-white/50 dark:bg-[#050F28]/50 sticky top-0 z-50"
>
	<div class="flex items-center justify-center h-full mx-4 left-10">
		<img src="/images/logo-blue.svg" alt="Logo" class="h-12 self-center" />
		<h3 class="ml-3 text-lg font-bold">Catalyst</h3>
	</div>
	<div class="flex justify-end items-center">
		<button class="lg:hidden text-2xl" on:click={toggleNavbar}>
			<IconMenu />
		</button>
		<div class="hidden lg:block">
			<ul class="flex items-center">
				{#each items as item}
					<li class="px-4 py-2 text-md font-medium">
						<a href={item.url} class="hover:text-gray-300">{item.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="right flex h-full items-center mx-4 w-48">
		<DarkModeToggle />
		<GradientButton
			href="https://catalyst.bloom.io/login"
			class="mr-4"
			gradientAngle="90deg"
			gradientColors={[
				{ color: 'var(--catalyst-600)', stop: 0 },
				{ color: 'var(--blue-700)', stop: 100 }
			]}
			gradientHoverColors={[
				{ color: 'var(--catalyst-500)', stop: 0 },
				{ color: 'var(--blue-600)', stop: 100 }
			]}
		>Login</GradientButton>
	</div>
</nav>

{#if navbarOpen}
<div class="fixed inset-0 bg-white dark:bg-[#050F28] z-50 lg:hidden">
	<div class="flex flex-col h-full">
		<div class="flex justify-between items-center p-4">
			<div class="flex items-center">
				<img src="/images/logo-blue.svg" alt="Logo" class="h-12" />
				<h3 class="ml-3 text-lg font-bold">Catalyst</h3>
			</div>
			<button class="text-2xl text-black dark:text-white" on:click={toggleNavbar}>
				<IconX />
			</button>
		</div>
		<ul class="flex flex-col items-center justify-center flex-grow ">
			{#each items as item}
				<li class="py-4 text-xl font-medium dark:text-white text-black">
					<a href={item.url} class="hover:text-gray-300" on:click={toggleNavbar}>{item.name}</a>
					<div class="divider border-b-[1px] border-blue-300"></div>
				</li>
			{/each}
		</ul>
		<div class="flex justify-center items-center p-4">
			<DarkModeToggle />
			<GradientButton
				href="https://catalyst.bloom.io/login"
				class="ml-4"
				gradientAngle="90deg"
				gradientColors={[
					{ color: 'var(--catalyst-600)', stop: 0 },
					{ color: 'var(--blue-700)', stop: 100 }
				]}
				gradientHoverColors={[
					{ color: 'var(--catalyst-500)', stop: 0 },
					{ color: 'var(--blue-600)', stop: 100 }
				]}
			>Login</GradientButton>
		</div>
	</div>
</div>
{/if}

<style>
	:root {
		--topnav-height: 6vh;
	}
	.navbar {
		box-shadow:
			0 4px 10px rgba(255, 0, 0, 0.4),
			0 0 15px rgba(0, 0, 255, 0.6);
		backdrop-filter: blur(10px);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		transition-duration: 0;
	}
	.dark {
		background-color: #050F28;
		color: #fff;
	}
</style>