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
	<div class="section-wrapper">
		<section class="section section-1  dark:bg-black/50 border-[2rem] border-catalyst-100/20">
		  <!-- Content for section 1 -->
		  <Hero />
		</section>
		<!-- <div class="tile-transition"></div> -->
		<section class="section section-2 bg-black/50">
		  <!-- Content for section 2 -->
		  <SocialProof />
		</section>
	  </div>
	<!-- <PrelineHeroPolygon /> -->
	 <SectionFeaturesTabs />
	<!-- <MambaFeaturesVTabs /> -->
	<PrelineFeaturesVTabs />
	<PrelineFeaturesHTabs />
	<BlogSection />
	<PricingTable />
</section>

  
  <style>
  .section-wrapper {
	position: relative;
	overflow: hidden;
	max-width: calc(100vw - 15px);
  }
  
  .section {
	/* min-height: 100vh; */
	padding: 2rem;
  }


  .tile-transition {
	height: 256px; /* 16 rows * 16px */
	position: relative;
	overflow: hidden;
  }
  
  .tile-transition::before,
  .tile-transition::after {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	height: 100%;
	background-image: var(--catalyst-gradient-tertiary);
	/* background: pink; */
	background-size: 54px 54px;
	background-position: 0 0, 8px 8px;
	-webkit-mask-image: radial-gradient(round 16px at 50% 50%, #000 98%, transparent 100%);
	mask-image: radial-gradient(round 4px at 50% 50%, #000 98%, transparent 100%);
	-webkit-mask-size: 54px 54px;
	mask-size: 16px 16px;
  }
  
  .tile-transition::before {
	top: 0;
	transform: translateY(-50%);
	animation: dissolveTop 1.5s ease-in-out infinite alternate;
  }
  
  .tile-transition::after {
	bottom: 0;
	transform: translateY(50%);
	animation: dissolveBottom 1.5s ease-in-out infinite alternate;
  }
  
  @keyframes dissolveTop {
	0% { transform: translateY(-50%); }
	100% { transform: translateY(0); }
  }
  
  @keyframes dissolveBottom {
	0% { transform: translateY(50%); }
	100% { transform: translateY(0); }
  }
  </style>
