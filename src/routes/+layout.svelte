<script lang="ts">
	import '../app.postcss';

	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { onMount } from 'svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';

	import Nav from '$lib/components/Nav.svelte';
	import NavMobile from '$lib/components/NavMobile.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MambaFooter from '$lib/components/MambaFooter.svelte';
	import {
		SmallGridBackground,
		GridBackground,
		DotBackground
	} from '$lib/components/ui/GridAndDotBackground';


	onMount(() => {
		const scrollbarWidth = getScrollbarWidth();
		document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
	});
	function getScrollbarWidth() {
		// Create a temporary div with overflow
		const outer = document.createElement('div');
		outer.style.visibility = 'hidden';
		outer.style.overflow = 'scroll';
		document.body.appendChild(outer);

		// Create an inner div
		const inner = document.createElement('div');
		outer.appendChild(inner);

		// Calculate the width difference
		const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

		// Remove the temporary divs
		outer.parentNode.removeChild(outer);

		return scrollbarWidth;
	}
</script>

<section
	name="layout-main"
	class="relative flex flex-col min-w-screen w-fit lg:w-screen min-h-screen bg-white dark:bg-black"
>
	<!-- <GridBackground opacityDark={50} opacityLight={50}> -->
	<div class="flex flex-col w-full h-full z-10">
		<!-- <Nav /> -->

		<NavMobile />

		<div class="w-full h-full justify-center align-middle items-center">
			<slot />
		</div>
		<!-- <Footer /> -->

		<MambaFooter />
	</div>
	<!-- </GridBackground> -->
</section>

<style>
	:global(html) {
		/* min-width: fit-content; */
		overflow-x: hidden;
	}
</style>
