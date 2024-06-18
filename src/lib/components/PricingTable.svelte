<script>
	import GradientButton from '$lib/components/GradientButton.svelte';
import { IconCheck } from '@tabler/icons-svelte';
import { IconCircleCheckFilled } from '@tabler/icons-svelte';

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
			]
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
<section class="flex items-center justify-center ">
    
    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {#each pricingCards as card}
            <div class="card p-8">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <p class="text-5xl font-extrabold">{card.price}</p>
                <ul>
                    {#each card.items as item}
                    <div class="flex">
                        <li class="flex text-white text-sm my-2">

                                <IconCircleCheckFilled  class="text-green-500 dark:text-green-400 mx-2" />{item}</li>
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
        {/each}
    </div>
</section>
