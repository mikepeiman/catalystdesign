<script>
	// import { Button, GradientButton } from 'flowbite-svelte';
	import GradientButton from '$lib/components/GradientButton.svelte';
	import { IconArrowRight, IconCalendar } from '@tabler/icons-svelte';
	// import { SmallGridBackground, GridBackground, DotBackground } from './ui/GridAndDotBackground';
</script>

<!-- <DotBackground> -->

<div class="section-bg"></div>

<section name="hero" class="hero-main flex flex-col w-full justify-center items-center bg-white/95 dark:bg-blue-700/20   border-b-cyan-300/20 border-b-[1px]">
	<div class="w-fit flex flex-col h-full justify-center items-center font-display">
		<div
			class="text-4xl sm:text-5xl -mt-[20vh] text-center font-extrabold tracking-tight leading-none text-gray-900 lg:text-7xl dark:text-white"
		>
			<h1 class=" mb-4">You need a website?</h1>
			<h1 class="mb-4">We build websites.</h1>
			<h1 class="mb-4">Let's talk.</h1>
		</div>

		<div
			class="subtext text-black dark:text-white font-inter flex flex-col items-center justify-center text-base md:text-xl text-center mt-8 w-full"
		>
			<p>You've got enough to do. Let us handle this part.</p>
			<p class="mt-1">Quick, easy, and stress-free. That's our process.</p>

			<div class="cta-section text-base flex my-8 w-full">
				<GradientButton
					class="mr-6 "
					gradientAngle="110deg"
					gradientColors={[
						{ color: 'var(--green-600)', stop: 20 },
						{ color: 'var(--zinc-800)', stop: 20 },
						{ color: 'var(--blue-700)', stop: 100 }
					]}
					gradientHoverColors={[
						{ color: 'var(--green-600)', stop: 0 },
						{ color: 'var(--cyan-600)', stop: 100 }
					]}
				>
					Get a Quick Quote
				</GradientButton>
				<GradientButton
					class=" "
					gradientAngle="110deg"
					gradientColors={[
						{ color: 'var(--slate-600)', stop: 20 },
						{ color: 'var(--zinc-800)', stop: 20 },
						{ color: 'var(--blue-700)', stop: 100 }
					]}
					gradientHoverColors={[
						{ color: 'var(--zinc-600)', stop: 0 },
						{ color: 'var(--blue-600)', stop: 100 }
					]}
				>
					See Our Process
				</GradientButton>
			</div>
		</div>
	</div>
</section>

<!-- </DotBackground> -->

<style>
	:root {
		--hero-watermark-width: 100vw;
		--hero-watermark-height: 90vh;
        --hero-main-height: 84vh;
	}

	.section-bg {
		background-image: url('/images/logo-blue.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.1;
		position: absolute;
		top: -6vh;
		left: 0;
		height: calc(var(--hero-main-height) + var(--topnav-height)*2);
		width: var(--hero-watermark-width);

	}

	.hero-main {
		height: var(--hero-main-height);
	}

	
</style>
