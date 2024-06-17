<script lang="ts">
	import {
		Section,
		PricingBodyHead,
		PricingCard,
		PricingItemWrapper,
		PricingHead,
		PricingItem
	} from 'flowbite-svelte-blocks';
	import { Button } from 'flowbite-svelte';
	import { GradientButton } from 'flowbite-svelte';
	import CustomGradientButton from '$lib/components/CustomGradientButton.svelte';
	import GradientButton2 from '$lib/components/GradientButton2.svelte';

</script>

<Section name="pricing">
	<PricingHead>
		<svelte:fragment slot="h2">Designed for business teams like yours</svelte:fragment>
		<svelte:fragment slot="paragraph"
			>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
			long-term value and drive economic growth.</svelte:fragment
		>
	</PricingHead>
	<div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
		<PricingCard>
			<PricingBodyHead>
				<svelte:fragment slot="h3">Single Page Site</svelte:fragment>
				<svelte:fragment slot="paragraph"
					>Best option for personal use & for your next project.</svelte:fragment
				>
				<svelte:fragment slot="price">
					<span class="mr-2 text-5xl font-extrabold">$1950</span>
					<!-- <span class="text-gray-500 dark:text-gray-400">/month</span> -->
				</svelte:fragment>
			</PricingBodyHead>
			<PricingItemWrapper>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Individual configuration</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>No setup, or hidden fees</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Team size: <span class="font-semibold">1 developer</span></span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Premium support: <span class="font-semibold">6 months</span></span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Free updates: <span class="font-semibold">6 months</span></span>
				</PricingItem>

				<svelte:fragment slot="btn">
                    <GradientButton2
                    gradientAngle="110deg"
                    gradientAngleHover="110deg"
                    gradientColors={[
                      { color: 'var(--cyan-600)', stop: 0 },
                      { color: 'var(--purple-800)', stop: 50 },
                      { color: 'var(--blue-700)', stop: 100 }
                    ]}
                    gradientHoverColors={[
                      { color: 'var(--cyan-500)', stop: 0 },
                      { color: 'var(--purple-600)', stop: 50 },
                      { color: 'var(--blue-600)', stop: 100 }
                    ]}
                  >
                    Get started
                  </GradientButton2>
				</svelte:fragment>
			</PricingItemWrapper>
		</PricingCard>

		<PricingCard>
			<PricingBodyHead>
				<svelte:fragment slot="h3">Full Site+</svelte:fragment>
				<svelte:fragment slot="paragraph"
					>Relevant for multiple users, extended & premium support.</svelte:fragment
				>
				<svelte:fragment slot="price">
					<span class="mr-2 text-5xl font-extrabold">$4950</span>
					<!-- <span class="text-gray-500 dark:text-gray-400">/month</span> -->
				</svelte:fragment>
			</PricingBodyHead>
			<PricingItemWrapper>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Individual configuration</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>No setup, or hidden fees</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Team size: <span class="font-semibold">10 developer</span></span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Premium support: <span class="font-semibold">24 months</span></span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Free updates: <span class="font-semibold">24 months</span></span>
				</PricingItem>

				<svelte:fragment slot="btn">
                    <GradientButton2
                    gradientAngle="-60deg"
                    gradientAngleHover="60deg"

                  >
                    Get started
                  </GradientButton2>
				</svelte:fragment>
			</PricingItemWrapper>
		</PricingCard>

		<PricingCard>
			<PricingBodyHead>
				<svelte:fragment slot="h3">Large Projects</svelte:fragment>
				<svelte:fragment slot="paragraph"
					>Best for large scale uses and extended redistribution rights.</svelte:fragment
				>
				<svelte:fragment slot="price">
					<span class="mr-2 text-5xl font-extrabold">$9,000+</span>
					<!-- <span class="text-gray-500 dark:text-gray-400">/month</span> -->
				</svelte:fragment>
			</PricingBodyHead>
			<PricingItemWrapper>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Individual configuration</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>No setup, or hidden fees</span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Team size: <span class="font-semibold">100+ developer</span></span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Premium support: <span class="font-semibold">36 months</span></span>
				</PricingItem>
				<PricingItem class="text-green-500 dark:text-green-400">
					<span>Free updates: <span class="font-semibold">36 months</span></span>
				</PricingItem>

				<svelte:fragment slot="btn">
                    <GradientButton2
                    gradientAngle="-60deg"
                    gradientAngleHover="60deg"
                  >
                    Get started
                  </GradientButton2>
				</svelte:fragment>
			</PricingItemWrapper>
		</PricingCard>
		<div class="gradient-button h-20 w-20"></div>
	</div>
</Section>

<style>
	.gradient-button-1 {
		position: relative;
		background-image: linear-gradient(45deg, var(--orange-900), var(--cyan-500));
		transition: all 0.3s ease;
		z-index: 1;
	}
	.gradient-button-1::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(90deg, var(--blue-700), var(--orange-700));
		z-index: -1;
		transition: all 0.3s ease;
		opacity: 0;
	}
	.gradient-button-1:hover::before {
		opacity: 1;
	}
</style>
