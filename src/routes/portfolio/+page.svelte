<script lang="ts">
    import type { PageData } from './$types';
    import PrelineMasonry from '$lib/components/PrelineMasonry.svelte';
    import PrelineGallery from '$lib/components/PrelineGallery.svelte';
    export let data: PageData;
</script>

<PrelineMasonry />

<PrelineGallery />