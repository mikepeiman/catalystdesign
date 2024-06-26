<script>
	import GradientButton from '$lib/components/GradientButton.svelte';
</script>

<div class="w-screen min-h-screen pile mx-auto size-full">
	<div class="section-bg w-full h-full"></div>
	<div class="pile z-10 mt-20">
		<!-- ========== HEADER ========== -->
		<header class="mb-auto flex justify-center z-50 w-full py-4">
			<nav class="px-4 sm:px-6 lg:px-8" aria-label="Global">
				<a
					class="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
					href="#"
					aria-label="Brand font-bold">Catalyst Design</a
				>
			</nav>
		</header>
		<!-- ========== END HEADER ========== -->

		<!-- ========== MAIN CONTENT ========== -->
		<main id="content" class="">
			<div class="text-center py-10 px-4 sm:px-6 lg:px-8">
				<h1 class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
				<p class="mt-3 text-gray-600 dark:text-neutral-400">Oops, something went wrong.</p>
				<p class="text-gray-600 dark:text-neutral-400">Sorry, we couldn't find your page.</p>
				<div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
					<a
						class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						href="/"
					>
						<svg
							class="flex-shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
						>
						Back to home
					</a>
				</div>
			</div>
		</main>
		<!-- ========== END MAIN CONTENT ========== -->

		<!-- ========== FOOTER ========== -->
		<footer class="mt-auto text-center py-5">
			<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
				<p class="text-sm text-gray-500 dark:text-neutral-500">© All Rights Reserved. 2022.</p>
			</div>
		</footer>
	</div>

	<!-- ========== END FOOTER ========== -->
</div>

<!-- <section class="error flex flex-col h-full w-screen">
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
</section> -->

<style lang="scss">
	.error {
		height: calc(100vh - var(--topnav-height));
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.section-bg {
		background-image: url('/images/logo-blue.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.3;
		z-index: -1;
	}

	.pile {
		display: grid;

		> * {
			grid-area: 1/1;
		}
	}
</style>
