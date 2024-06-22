<script>
	import GradientButton from '$lib/components/GradientButton.svelte';
</script>

<section class="error flex flex-col h-full w-screen">
	<div class="flex flex-col w-fit items-center">
		<p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
			Something's missing.
		</p>
		<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
			Sorry, we can't find that page. You'll find lots to explore on the home page.
		</p>
		<a href="/">
			<GradientButton href="/" class="w-fit px-8">Back to Homepage</GradientButton>
		</a>
	</div>
</section>

<style>
	.error {
		height: calc(100vh - var(--topnav-height));
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
