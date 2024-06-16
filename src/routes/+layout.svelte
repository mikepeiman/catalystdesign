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
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<section
	class="flex flex-col w-screen h-screen bg-gradient-to-br from-primary-600 to-secondary-800"
>
	<div class="bg-white/95 dark:bg-black/50 flex flex-col w-full h-full">
		<Nav />
		<div class="w-full h-full justify-center align-middle items-center">
			<slot />
		</div>
	</div>
</section>

<style>
	:global(body,
	body *) {
		transition:
			background-color 0.15s,
			color 0.15s,
			border-color 0.15s;
	}
</style>
