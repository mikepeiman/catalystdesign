<script>
	import Hero from '$lib/components/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof.svelte';
	import PricingTable from '$lib/components/PricingTable.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
	import { SmallGridBackground, GridBackground, DotBackground } from '$lib/components/ui/GridAndDotBackground';
	import PrelineHeroPolygon from '$lib/components/PrelineHeroPolygon.svelte';
	import PrelineFeaturesHTabs from '$lib/components/PrelineFeaturesHTabs.svelte';
	import PrelineFeaturesVTabs from '$lib/components/PrelineFeaturesVTabs.svelte';
	import MambaFeaturesVTabs from '$lib/components/MambaFeaturesVTabs.svelte';
	import SectionFeaturesTabs from '$lib/components/SectionFeaturesTabs.svelte';

</script>

<section name="homepage" class="w-full h-full">
	<Hero />
	<!-- <PrelineHeroPolygon /> -->
	<SocialProof />
	 <SectionFeaturesTabs />
	<!-- <MambaFeaturesVTabs /> -->
	<PrelineFeaturesVTabs />
	<PrelineFeaturesHTabs />
	<BlogSection />
	<PricingTable />
</section>

<style>
</style>
