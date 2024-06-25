// src/routes/[...catchall]/+page.server.js

import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';

/** @type {import('../$types').PageServerLoad} */
export async function load(event) {
  // fetch your Builder content
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: '0d11354f12494217851146255cfd9d9e',
    options: getBuilderSearchParams(event.url.searchParams),
    userAttributes: {
      urlPath: event.url.pathname || '/',
    },
  });
  return { content };
}