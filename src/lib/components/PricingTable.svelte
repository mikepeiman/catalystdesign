<script>
	import GradientButton from '$lib/components/GradientButton.svelte';
	import { IconCheck } from '@tabler/icons-svelte';
	import { IconCircleCheckFilled } from '@tabler/icons-svelte';
	import { twMerge } from 'tailwind-merge';

	let pricingCards = [
		{
			title: 'Single Page Site',
			price: '$1950',
			description: 'Best option for personal use & for your next project.',
			items: [
				'Individual configuration',
				'No setup, or hidden fees',
				'Team size: 1 developer',
				'Premium support: 6 months',
				'Free updates: 6 months'
			],
			gradientColors: [
				{ color: 'var(--cyan-600)', stop: 20 },
				{ color: 'var(--purple-800)', stop: 20 },
				{ color: 'var(--blue-700)', stop: 100 }
			],
			gradientHoverColors: [
				{ color: 'var(--cyan-600)', stop: 0 },
				{ color: 'var(--blue-600)', stop: 100 }
			]
		},
		{
			title: 'Full Site+',
			price: '$4950',
			description: 'Relevant for multiple users, extended & premium support.',
			items: [
				'Individual configuration',
				'No setup, or hidden fees',
				'Team size: 10 developers',
				'Premium support: 24 months',
				'Free updates: 24 months'
			],
			gradientColors: [
				{ color: 'var(--green-400)', stop: 20 },
				{ color: 'var(--purple-800)', stop: 20 },
				{ color: 'var(--blue-700)', stop: 100 }
			],
			gradientHoverColors: [
				{ color: 'var(--green-400)', stop: 0 },
				{ color: 'var(--green-600)', stop: 100 }
			],
			cardClasses: 'shadow-md rounded-md transform scale-105'
		},
		{
			title: 'Large Projects',
			price: '$9,000+',
			description: 'Best for large scale uses and extended redistribution rights.',
			items: [
				'Individual configuration',
				'No setup, or hidden fees',
				'Team size: 100+ developers',
				'Premium support: 36 months',
				'Free updates: 36 months'
			],
			gradientColors: [
				{ color: 'var(--cyan-600)', stop: 20 },
				{ color: 'var(--purple-800)', stop: 20 },
				{ color: 'var(--blue-700)', stop: 100 }
			],
			gradientHoverColors: [
				{ color: 'var(--cyan-600)', stop: 0 },
				{ color: 'var(--blue-600)', stop: 100 }
			]
		}
	];
</script>

<section name="pricing-table" class="relative py-[12%] ">
	<div class="pricing-bg"></div>
	<div class="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12">
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
			Designed for busy business owners
		</h2>
		<p class="my-8 w-full font-light text-gray-500 sm:text-xl dark:text-gray-400 text-center">
			At Catalyst Design, we are committed to making our customers' lives easier.<br />
			Our process is simple and efficient, and our pricing plans are designed to meet the needs of all
			business owners.
			<br />
			We can handle any design & development, marketing, or business process project you need, regardless
			of size.
		</p>
	</div>
	<div class="flex w-full justify-center items-center">
        <div class="space-y-8 w-full lg:w-3/4 2xl:w-1/2 mx-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 s-_fJE4A76f_0B">
            <!-- <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 flex"> -->
            {#each pricingCards as card}
                <div
                    class={twMerge(
                        ' flex p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white',
                        card.cardClasses
                    )}
                >
                    <div class="text-black dark:text-white flex flex-col items-center m-0 p-0">
                        <h3 class="text-2xl font-semibold self-center mb-6">{card.title}</h3>
                        <p class="self-center mb-6 text-slate-400 text-lg font-light">{card.description}</p>
                        <p class="text-5xl font-extrabold mb-6">{card.price}</p>
                        <ul class="flex flex-col items-start justify-start self-start">
                            {#each card.items as item}
                                <div class="flex">
                                    <li class="flex text-black dark:text-white text-md my-2">
                                        <IconCircleCheckFilled
                                            class="text-green-500 dark:text-green-400 mx-2 w-5 h-5"
                                        />{item}
                                    </li>
                                </div>
                            {/each}
                        </ul>
                        <GradientButton
                            class="mt-6"
                            gradientAngle="110deg"
                            gradientColors={card.gradientColors}
                            gradientHoverColors={card.gradientHoverColors}
                        >
                            Get started
                        </GradientButton>
                    </div>
                </div>
            {/each}
            <!-- </div> -->
        </div>
    </div>
	<!-- </div> -->
</section>

<style>
	.pricing-bg {
		background-image: url('/images/logo-blue.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.1;
		position: absolute;
		top: 0;
		left: 0;
		height: var(--hero-watermark-height);
		width: 100vw;
		border-bottom: 4px solid var(--cyan-300);
        padding: 0;
        margin: 0;
	}
</style>
