<script>
	import Hero from '$lib/components/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof.svelte';
	import PricingTable from '$lib/components/PricingTable.svelte';
	import PricingTableFB from '$lib/components/flowbite/PricingTableFB.svelte';
	import BlogSectionFB from '$lib/components/flowbite/BlogSection.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
</script>

<section name="homepage" class="w-full h-full">
	<Hero />
	<SocialProof />
	<PricingTable />
	<BlogSection />
</section>

<style>
</style>
