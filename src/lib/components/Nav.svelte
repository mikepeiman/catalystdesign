<script>
	let items = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{ name: 'Services', url: '/services' },
		{ name: 'Portfolio', url: '/portfolio' },
		{ name: 'Contact', url: '/contact' }
	];
</script>

<div class="h-20 bg-white/10 dark:bg-gray/20 flex justify-center relative">
	<div class="flex items-center justify-center h-full mr-4 absolute left-10">
		<img src="/images/logo.svg" alt="Logo" class="h-12 self-center" />
        <h3 class="text-primary-500 dark:text-tertiary-200 ml-3 text-lg">Catalyst</h3>
	</div>
	<div class=" flex justify-around items-center">
		<ul class="flex justify- align-middle items-center">
			{#each items as item}
				<li class="px-4 py-2 text-lg">
					<a href={item.url} class="text-white hover:text-gray-300">{item.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
