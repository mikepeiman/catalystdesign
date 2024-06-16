<script>
	import DarkModeToggle from "./DarkModeToggle.svelte";

	let items = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{ name: 'Services', url: '/services' },
		{ name: 'Portfolio', url: '/portfolio' },
		{ name: 'Contact', url: '/contact' }
	];
</script>

<div class="h-20  flex justify-between relative font-inter">
	<div class="flex items-center justify-center h-full mx-4 left-10">
		<img src="/images/logo.svg" alt="Logo" class="h-12 self-center" />
        <h3 class="text-dark dark:text-white ml-3 text-lg font-bold">Catalyst</h3>
	</div>
	<div class=" flex justify-around items-center">
		<ul class="flex justify- align-middle items-center">
			{#each items as item}
				<li class="px-4 py-2 text-md font-medium">
					<a href={item.url} class="text-white hover:text-gray-300">{item.name}</a>
				</li>
			{/each}
		</ul>
        </div>
        <div class="right flex h-full items-center mx-4">
            <DarkModeToggle />
            <button
                class="btn variant-filled-primary dark:text-white bg-primary-500 hover:bg-primary-600 border-none rounded-sm"
                >Get Started</button>
        </div>
</div>
