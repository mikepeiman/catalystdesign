import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({
		scss: true
	})],
	
	vitePlugin: {
		inspector: true,
	},
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	onwarn: (warning, handler) => {
		// Ignore CSS-related warnings in development
		// if (process.env.NODE_ENV === 'development' && warning.code.startsWith('css-')) return;
		if (process.env.NODE_ENV === 'development') return;

	
		// Handle all other warnings normally
		handler(warning);
	  },

};
export default config;