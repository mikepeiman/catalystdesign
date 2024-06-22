<script>
    import { IconChevronRight, IconFileReport, IconFileText, IconSchool, IconVideo } from '@tabler/icons-svelte';
  
    const posts = [
      {
        title: "How we redesigned our website in 6 weeks",
        date: "June 3, 2022", 
        preview: "Our team of designers and developers worked together to...", 
        author: {
          name: "Emma Wilson",
          img: "images/avatars/avatar-8.jpg"  
        },
        tags: ["web design", "web development"],
        type: "case study",
        icon: IconFileText
      },
  
      {
        title: "3 tips for optimizing your websites' performance",  
        date: "May 15, 2022",
        preview: "Speed is essential for any modern website. Here are...",
        author: {
          name: "Jack Peterson", 
          img: "images/avatars/avatar-8.jpg"
        },
        tags: ["web design", "web development"],
        type: "tutorial",
        icon: IconVideo
      },
  
      {
        title: "How we built our client onboarding tool",
        date: "April 1, 2022",
        preview: "We created a simple form and workflow to streamline...",
        author: {
          name: "Liza Moore",
          img: "images/avatars/avatar-8.jpg"
        },
        tags: ["web design", "web development"],
        type: "article",
        icon: IconFileReport
      }
    ]
  </script>
  <section name="blog-posts" class="bg-white dark:bg-zinc-900 text-black dark:text-white relative h-full border-cyan-300/20 border-b-[1px]">
      <!-- <div class="section-bg"></div> -->

    <div class="max-w-7xl mx-auto px-4 pt-16 pb-20">
  
      <div class="flex flex-col text-center mb-12 mt-24">
          <h2 class="text-4xl font-bold mb-4 font-extrabold text-center ">Latest Blog Posts</h2>
          <p class="text-xl font-thin">Our team of designers and developers worked together to create a website that reflects our brand values.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
        {#each posts as post}
  
          <article class="bg-zinc-600 text-white p-6 rounded-lg shadow">
  
            <div class="flex items-center justify-between p-0 mb-4">
              <div class="flex items-center text-zinc-300  bg-zinc-800 rounded-lg p-1 pr-2 mx-1 text-nowrap ">
                <svelte:component this={post.icon} class="w-6 h-6 text-blue-500 " />
                <p class="ml-2 text-sm font-medium  ">
                  {post.type}
                </p>
              </div>
              <time class="block mt-1 text-sm text-zinc-300">
                {post.date}
              </time> 

            </div>
            <header>
              <h3 class="text-xl font-bold  ">
                {post.title}
              </h3>
  

            </header>
  
            <p class="mt-4 text-white">
              {post.preview}
            </p>
  
            <footer class="flex items-center justify-between mt-6 text-zinc-300">
  
              <div class="flex flex-col w-full">
                  <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <img
                          class="w-8 h-8 rounded-full mr-3"
                          src={post.author.img}
                        >
                        <p class="text-sm font-medium text-white">
                          {post.author.name}
                        </p>
                      </div>
                      <a
                        href="/blog"
                        class="flex items-center text-zinc-300 hover:underline"
                      >
                        Read More
                        <IconChevronRight class="ml-1" />
                      </a>
                  </div>
                  <div class="flex items-start justify-start flex-wrap mt-4">
                    {#each post.tags as tag}
                      <p class="text-sm font-medium text-zinc-300 bg-zinc-800 rounded-lg px-1 mx-1 text-nowrap">
                        {tag}
                      </p>
                    {/each}
                  </div>
              </div>
  
            </footer>
  
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
		border-bottom: 4px solid var(--cyan-300);
	}
  </style>