<script>
  import { fade, fly } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import Icon from '@iconify/svelte';

  let activeTab = 0;

  const services = [
    {
      id: 0,
      title: "Website Design & Development",
      description: "Crafting stunning, functional websites for individuals and businesses.",
      icon: "tabler:world-www",
      expanded: "Our expert team delivers bespoke website solutions that not only look great but also drive results. From responsive designs to e-commerce platforms, we create digital experiences that engage your audience and grow your online presence.",
      cta: "Start Your Web Project",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
    },
    {
      id: 1,
      title: "Modern Technology Consulting",
      description: "Empowering agencies with cutting-edge tech and streamlined processes.",
      icon: "tabler:books",
      expanded: "Stay ahead of the curve with our modern technology consulting services. We help agencies optimize their workflows, implement the latest tools, and develop scalable processes that boost efficiency and drive innovation.",
      cta: "Revolutionize Your Agency",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Small Business Solutions",
      description: "Tailored software and processes to streamline your operations.",
      icon: "tabler:rocket",
      expanded: "Unlock your small business's potential with our custom software and process solutions. From CRM systems to inventory management, we provide tailored tools that automate tasks, improve productivity, and fuel your growth.",
      cta: "Optimize Your Business",
      image: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  function setActiveTab(index) {
    activeTab = index;
  }
</script>

<div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14  transition-colors duration-300">
  <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300"
      in:fly="{{ x: -20, duration: 600, delay: 200, easing: cubicInOut }}">
    Elevate Your Digital Presence
  </h2>

  <!-- Large screens -->
  <div class="hidden lg:block">
    <div class="flex justify-center mb-8">
      {#each services as service, index}
        <button
          class="px-6 py-3 text-lg font-semibold transition-all duration-300 ease-in-out {activeTab === index ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}"
          on:click={() => setActiveTab(index)}
        >
          {service.title}
        </button>
      {/each}
    </div>

    <div class="relative overflow-hidden" style="height: 400px;">
      {#each services as service, index}
        {#if activeTab === index}
          <div class="absolute top-0 left-0 w-full h-full grid grid-cols-2 gap-8 items-center"
               in:fly="{{ x: 100, duration: 300, easing: cubicInOut }}"
               out:fly="{{ x: -100, duration: 300, easing: cubicInOut }}">
            <div class="max-w-xl">
              <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{service.expanded}</p>
              <a href="#" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
                {service.cta}
              </a>
            </div>
            <div class="h-[400px]">
              <img src={service.image} alt={service.title} class="w-full h-full object-cover rounded-xl shadow-lg">
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>

  <!-- Medium screens and below -->
  <div class="lg:hidden space-y-12">
    {#each services as service, index}
      <div class="{index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}"
           in:fly="{{ x: index % 2 === 0 ? -20 : 20, duration: 600, delay: 200 + index * 100, easing: cubicInOut }}">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          <div class="p-6">
            <Icon icon={service.icon} class="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4 max-w-prose">{service.description}</p>
            <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
              {service.cta}
            </a>
          </div>
          <div class="h-48 md:h-64">
            <img src={service.image} alt={service.title} class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>