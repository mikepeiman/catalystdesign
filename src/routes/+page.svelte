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

<section name="homepage" class="w-full h-full relative">
	<div class="absolute inset-0 z-0" style="background-image: url('/images/logo-blue.svg'); background-position: center; background-repeat: no-repeat; background-size: cover; opacity: 0.3; top: -6vh; height: 140vh; width: 140%;">
	</div>
	<div class="relative z-10">
	  <div class="hero-section">
		<Hero />
	  </div>
	  <div class="social-section">
		<SocialProof />
	  </div>
	</div>
	<SectionFeaturesTabs />
	<PrelineFeaturesVTabs />
	<PrelineFeaturesHTabs />
	<BlogSection />
	<PricingTable />
  </section>
