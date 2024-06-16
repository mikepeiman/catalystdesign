

  <script>
	import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline, VideoCameraSolid } from 'flowbite-svelte-icons';
	// import { Youtube, ProductHunt, Reddit } from '../utils';
  </script>
  
  <Section name="heroDefault">
	<News>
	  <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
	  <span class="text-sm font-medium">Flowbite is out! See what's new</span>
	</News>
	<HeroHeader>
	  <svelte:fragment slot="h1">Your business deserves a better website -</svelte:fragment>
	  <svelte:fragment slot="h2">Something beautiful, functional, and high-converting.</svelte:fragment>
	  <svelte:fragment slot="paragraph"></svelte:fragment>
	</HeroHeader>
  
	<div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
	  <a href="/">
		<Button size="lg" color="blue">
		  Get a Quote <ArrowRightOutline size="md" class="ml-2 -mr-1" />
		</Button>
	  </a>
	  <a href="/">
		<Button size="lg" color="light">
		  <VideoCameraSolid size="xs" class="mr-2 -ml-1" />
		  Watch video
		</Button>
	  </a>
	</div>
	<HeroBody>
	  <svelte:fragment slot="head">DELIVERING</svelte:fragment>
  
	  <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
		<a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
			Gorgeous design
		</a>
		<a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
			Blazing speed
		</a>
		<a href="/" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
			High-converting
		</a>
	  </div>
	</HeroBody>
  </Section>