<script>
	// import { Button, GradientButton } from 'flowbite-svelte';
    import GradientButton from '$lib/components/GradientButton.svelte';
	import { IconArrowRight, IconCalendar } from '@tabler/icons-svelte';
    // import { SmallGridBackground, GridBackground, DotBackground } from './ui/GridAndDotBackground';
</script>
<!-- <DotBackground> -->

<div class="hero-bg"></div>

<div class="hero-main flex flex-col h-screen w-full justify-center items-center font-display">
	<h1
		class="-mt-[20vh] mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
	>
		You need a website?
	</h1>
	<h1
		class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
	>
		We build websites.
	</h1>
	<h1
		class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
	>
		Let's talk.
	</h1>

	<div class="subtext text-black dark:text-white font-inter text-xl text-center mt-8 w-3/4">
		<p>
			You've got enough to do. Let us handle this part.
		</p>
		<p class="mt-1">Quick, easy, and stress-free. That's our process.</p>
	</div>
	<div class="cta-section my-8">
		<GradientButton href="/contact" color="greenToBlue" size="lg" class="mr-4"
			>Get a Quick Quote <IconArrowRight class="ml-2" /></GradientButton
		>
		<GradientButton href="/contact" color="purpleToPink" size="lg"
			>Book a Call <IconCalendar class="ml-2" /></GradientButton
		>
	</div>
</div>
<!-- </DotBackground> -->

<style>
:root {
    --hero-watermark-width: 100vw;
    --hero-watermark-height: 90vh;
}

	.hero-bg {
		background-image: url('/images/logo.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.1;
		position: absolute;
		top: -6vh;
		left: 0;
        height: var(--hero-watermark-height);
        width: var(--hero-watermark-width);
        border-bottom: 4px solid var(--cyan-300);

	}

    .hero-main {
        max-height: calc(90vh - var(--topnav-height));
    }
</style>
