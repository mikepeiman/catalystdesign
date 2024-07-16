<script>
	import GradientButton from '$lib/components/GradientButton.svelte';
	import { IconArrowRight, IconCalendar } from '@tabler/icons-svelte';
	// import { SmallGridBackground, GridBackground, DotBackground } from './ui/GridAndDotBackground';
</script>

<!-- <DotBackground> -->
<!-- TODO add icons to buttons -->
<!-- TODO unify color scheme across hero and site (bg gradient, buttons, nav) -->
<!-- TODO add shadow to H1 -->
<div class="section-bg"></div>

<section
	name="hero"
	class="hero-main flex flex-col w-full justify-center items-center
	bg-white/20 bg-gradient-to-b from-slate-100/50 via-white/45 to-catalyst-400/50
	 dark:bg-black/20 dark:bg-gradient-to-b dark:from-fuchsia-800/20  dark:via-catalyst-500/20 dark:to-catalyst-900/40
	 "
>
	<div class="md:w-fit w-full flex flex-col h-full justify-center items-center font-display">
		<div
			class="text-4xl sm:text-5xl lg:-mt-[12vh] text-center font-extrabold tracking-tight leading-none text-gray-900 lg:text-7xl dark:text-white"
		>
			<h1 class=" mb-4">You need a website?</h1>
			<h1 class="mb-4">We build websites.</h1>
			<h1 class="mb-4">Let's talk.</h1>
		</div>

		<div
			class="subtext bg-white text-black dark:bg-black/0 dark:text-white font-inter flex flex-col tracking-normal font-light items-center justify-center font-extralight shadow-2xl dark:shadow-none pt-4 px-12 text-xl md:text-2xl text-center mt-12 w-full"
		>
			<p>You've got enough to do. Let us handle this part.</p>
			<p class="mt-1">Quick, easy, and stress-free. That's our process.</p>

			<div class="cta-section w-[85vw] md:w-full text-base flex my-8 w-full grid grid-cols-2 gap-6">
				<GradientButton
					class="shadow-lg shadow-black/40 dark:shadow-xl dark:shadow-white/20"
					gradientAngle="110deg"
					hoverScale="1.015"
					gradientColors={[
						{ color: 'var(--green-500)', stop: 15 },
						{ color: 'var(--catalyst-900)', stop: 15 },
						{ color: 'var(--catalyst-700)', stop: 100 }
					]}
					gradientHoverColors={[
						{ color: 'var(--green-500)', stop: 0 },
						{ color: 'var(--catalyst-700)', stop: 25 },
						{ color: 'var(--catalyst-700)', stop: 100 }
					]}
				>
					Get a Quick Quote
				</GradientButton>
				<GradientButton
					class="shadow-lg shadow-black/40 dark:shadow-xl dark:shadow-white/20"
					gradientAngle="110deg"
					hoverScale="1.015"
					gradientColors={[
						{ color: 'var(--catalyst-300)', stop: 15 },
						{ color: 'var(--catalyst-900)', stop: 15 },
						{ color: 'var(--catalyst-700)', stop: 100 }
					]}
					gradientHoverColors={[
						{ color: 'var(--catalyst-300)', stop: 0 },
						{ color: 'var(--catalyst-700)', stop: 25 },
						{ color: 'var(--catalyst-900)', stop: 100 }
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
		opacity: 0.3;
		position: absolute;
		top: -6vh;
		left: 0;
		z-index: -1;
		height: 100vh;
		/* height: calc(var(--hero-main-height) + var(--topnav-height) * 2); */
		width: var(--hero-watermark-width);
	}

	.hero-main {
		height: 50vh;
	}
	@media (min-width: 768px) {
		.hero-main {
			height: var(--hero-main-height);
		}
	}
</style>
