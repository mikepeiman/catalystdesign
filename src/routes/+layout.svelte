<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Nav from '$lib/components/Nav.svelte';
	import NavMobile from '$lib/components/NavMobile.svelte';
	import { SmallGridBackground, GridBackground, DotBackground } from '$lib/components/ui/GridAndDotBackground';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<section
class="flex flex-col min-w-screen w-fit lg:w-screen h-screen  bg-black/50"
>
<!-- <GridBackground> -->
	<div class="bg-white/95 dark:bg-blue-700/20 flex flex-col w-full h-full">
		<!-- <Nav /> -->
		<NavMobile />
		<div class="w-full h-full justify-center align-middle items-center">
			<slot />
		</div>
	</div>
<!-- </GridBackground> -->
</section>

<style>
	:global(html) {
		/* min-width: fit-content; */
		overflow-x: hidden;
	}
	:global(body,
	body *, nav, nav *) {
		transition:
			background-color 0.15s,
			color 0.15s,
			border-color 0.15s;
			
	}


</style>
