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
  <section class="bg-white">

    <div class="max-w-7xl mx-auto px-4 pt-16 pb-20">
  
      <h2 class="text-3xl font-bold text-gray-900">Latest Blog Posts</h2>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
        {#each posts as post}
  
          <article class="bg-zinc-600 text-white p-6 rounded-lg shadow">
  
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svelte:component this={post.icon} class="w-6 h-6 text-blue-500 " />
                <p class="ml-2 text-sm font-medium text-gray-900">
                  {post.type}
                </p>
              </div>
  
              <div class="flex items-center">
                {#each post.tags as tag}
                  <p class="text-sm font-medium text-gray-900">
                    {tag}
                  </p>
                {/each}
              </div>
            </div>
            <header>
              <h3 class="text-lg font-medium text-gray-900">
                {post.title}
              </h3>
  
              <time class="block mt-1 text-sm text-gray-600">
                {post.date}
              </time> 
            </header>
  
            <p class="mt-4 text-gray-600">
              {post.preview}
            </p>
  
            <footer class="flex items-center justify-between mt-6">
  
              <div class="flex items-center">
                <img 
                  class="w-8 h-8 rounded-full mr-3" 
                  src={post.author.img} 
                >
  
                <p class="text-sm font-medium text-gray-900">
                  {post.author.name}
                </p>
              </div>
  
              <a 
                href="/blog"
                class="flex items-center text-blue-600 hover:underline"
              >
                Read More
                <IconChevronRight class="ml-1" />
              </a>
  
            </footer>
  
          </article>
  
        {/each}
  
      </div>
  
    </div>
  
  </section>