<script>
	import DarkModeToggle from './DarkModeToggle.svelte';
	import { GradientButton } from 'flowbite-svelte';
	let items = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{ name: 'Services', url: '/services' },
		{ name: 'Portfolio', url: '/portfolio' },
		{ name: 'Contact', url: '/contact' }
	];

	import { onMount } from 'svelte';

let prevScrollpos = window.pageYOffset;
let navbar;

function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
	navbar.style.top = "0";  // Show the navbar
  } else {
	navbar.style.top = "-100px";  // Hide the navbar
  }

  prevScrollpos = currentScrollPos;
}

onMount(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
	window.removeEventListener("scroll", handleScroll);
  };
});
</script>

<nav
	bind:this={navbar}
	class="min-h-[var(--topnav-height)] text-black dark:text-white flex justify-between items-center font-inter bg-blue-900 sticky top-0 z-50 transition-all duration-300"
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
	<div class="right flex h-full items-center mx-4">
		<DarkModeToggle />
		<GradientButton
			href="https://catalyst.bloom.io/login"
			color="greenToBlue"
			size="md"
			class="mr-4">Login</GradientButton
		>
	</div>
</nav>

<style>
	:root {
		--topnav-height: 6vh;
	}
</style>
