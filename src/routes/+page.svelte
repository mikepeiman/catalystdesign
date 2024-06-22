<script>
	import Hero from '$lib/components/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof.svelte';
	import PricingTable from '$lib/components/PricingTable.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
	import { SmallGridBackground, GridBackground, DotBackground } from '$lib/components/ui/GridAndDotBackground';
</script>

<section name="homepage" class="w-full h-full">
	<Hero />
	<SocialProof />
	<BlogSection />
	<PricingTable />
</section>

<style>
</style>
