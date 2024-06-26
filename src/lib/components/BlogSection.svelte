<script>
	import {
		IconChevronRight,
		IconFileReport,
		IconFileText,
		IconSchool,
		IconVideo
	} from '@tabler/icons-svelte';

	const posts = [
		{
			title: 'How we redesigned our website in 6 weeks',
			date: 'June 3, 2022',
			preview: 'Our team of designers and developers worked together to...',
			author: {
				name: 'Emma Wilson',
				img: 'images/avatars/avatar-6.jpg'
			},
			tags: ['web design', 'web development'],
			type: 'case study',
			icon: IconFileText
		},

		{
			title: "3 tips for optimizing your websites' performance",
			date: 'May 15, 2022',
			preview: 'Speed is essential for any modern website. Here are...',
			author: {
				name: 'Jack Peterson',
				img: 'images/avatars/avatar-7.jpg'
			},
			tags: ['web design', 'web development'],
			type: 'tutorial',
			icon: IconVideo
		},

		{
			title: 'How we built our client onboarding tool',
			date: 'April 1, 2022',
			preview: 'We created a simple form and workflow to streamline...',
			author: {
				name: 'Liza Moore',
				img: 'images/avatars/avatar-8.jpg'
			},
			tags: ['web design', 'web development'],
			type: 'article',
			icon: IconFileReport
		}
	];
</script>


<section
  name="blog-posts"
  class="bg-gradient-to-b from-white to-catalyst-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 relative py-24"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-catalyst-600 dark:text-catalyst-300 mb-4">Latest Insights</h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Discover our latest thoughts on technology, design, and innovation.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each posts as post}
        <article class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-catalyst-500/20">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center text-catalyst-500 dark:text-catalyst-300">
                <svelte:component this={post.icon} class="w-5 h-5 mr-2" />
                <span class="text-sm font-medium">{post.type}</span>
              </div>
              <time class="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {post.preview}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              {#each post.tags as tag}
                <span class="text-xs font-medium bg-catalyst-100 text-catalyst-200 dark:bg-catalyst-700 dark:text-catalyst-200 rounded-full px-2 py-1">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img class="w-8 h-8 rounded-full mr-3" src={post.author.img} alt={post.author.name} />
                <span class="text-sm font-medium text-gray-900 dark:text-white">
                  {post.author.name}
                </span>
              </div>
              <a href="/blog" class="flex items-center text-catalyst-600 dark:text-catalyst-300 hover:underline text-sm font-medium">
                Read More
                <IconChevronRight class="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
<style>
	.section-bg {
		background-image: url('/images/logo-blue.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.1;
		position: absolute;
		top: 0;
		left: 0;
		/* height: calc(var(--hero-main-height) + var(--topnav-height)*2); */
		height: 100%;
		/* width: var(--hero-watermark-width); */
		width: 100vw;
		border-bottom: 4px solid var(--catalyst-300);
	}
</style>
