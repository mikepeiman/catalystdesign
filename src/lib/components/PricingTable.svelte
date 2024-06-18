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

<section class="relative py-6 sm:py-10">
	<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Designed for business teams like yours
			</h2>
			<p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
				Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
				long-term value and drive economic growth.
			</p>
		</div>
		<div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 s-_fJE4A76f_0B">
            <!-- <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 flex"> -->
                {#each pricingCards as card}
                    <div class={twMerge(
                        ' flex p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white',
                        card.cardClasses
                    )}
                     >
						<div class=' text-white flex flex-col items-center m-0 p-0'
						>
							<h3 class="text-2xl font-semibold self-center mb-6">{card.title}</h3>
							<p class="self-center mb-6 text-slate-400">{card.description}</p>
							<p class="text-5xl font-extrabold mb-6">{card.price}</p>
							<ul class="flex flex-col items-start justify-start self-start">
								{#each card.items as item}
									<div class="flex">
										<li class="flex text-white text-sm my-2">
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
</section>
