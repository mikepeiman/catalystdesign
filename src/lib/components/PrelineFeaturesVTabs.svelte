<script>
  import { fade, fly } from 'svelte/transition';
  import { quintOut, cubicInOut } from 'svelte/easing';
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

<div class="max-w-[100vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white dark:bg-gray-900 transition-colors duration-300">
  <div class="relative p-6 md:p-16">
    <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-white mb-6 transition-colors duration-300"
            in:fly="{{ y: 20, duration: 600, delay: 200, easing: cubicInOut }}">
          Elevate Your Digital Presence
        </h2>

        <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
          {#each services as service, index}
            <div in:fly="{{ y: 20, duration: 600, delay: 200 + index * 100, easing: cubicInOut }}">
              <button
                type="button"
                class="group hs-tab-active:bg-white hs-tab-active:shadow-md text-start hover:bg-gray-100 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out w-full {activeTab === index ? 'bg-white shadow-md dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}"
                id="tabs-with-card-item-{index + 1}"
                data-hs-tab="#tabs-with-card-{index + 1}"
                aria-controls="tabs-with-card-{index + 1}"
                role="tab"
                on:click={() => setActiveTab(index)}
              >
                <span class="flex items-center">
                  <Icon icon={service.icon} class="flex-shrink-0 mt-2 size-6 md:size-7 text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  <span class="grow ms-6">
                    <span class="block text-lg font-semibold text-gray-800 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors duration-300">{service.title}</span>
                    <span class="block mt-1 text-gray-600 dark:text-gray-300 transition-colors duration-300">{service.description}</span>
                  </span>
                  <Icon icon="tabler:chevron-right" class="flex-shrink-0 size-5 text-gray-600 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-400 transition-colors duration-300" />
                </span>
              </button>
            </div>
          {/each}
        </nav>

        <div class="mt-6 h-[150px] relative overflow-hidden">
          {#each services as service, index}
            {#if activeTab === index}
              <div class="absolute inset-0"
                   in:fly="{{ y: 20, duration: 300, delay: 50, easing: cubicInOut }}"
                   out:fade="{{ duration: 200 }}">
                <p class="text-gray-600 dark:text-gray-300 transition-colors duration-300 mb-4">
                  {service.expanded}
                </p>
                <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
                  {service.cta}
                </a>
              </div>
            {/if}
          {/each}
        </div>
      </div>

      <div class="lg:col-span-6">
        <div class="relative h-[400px]">
          {#each services as service, index}
            {#if activeTab === index}
              <div id="tabs-with-card-{index + 1}" 
                   role="tabpanel" 
                   aria-labelledby="tabs-with-card-item-{index + 1}"
                   class="absolute inset-0"
                   in:fade="{{ duration: 300, delay: 150 }}"
                   out:fade="{{ duration: 200 }}">
                <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-800/20 transition-all duration-300 object-cover w-full h-full" 
                     src={service.image} 
                     alt={service.title}>
              </div>
            {/if}
          {/each}
        </div>
      </div>
    </div>

    <div class="absolute inset-0 grid grid-cols-12 size-full">
      <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-gray-800 transition-colors duration-300"></div>
    </div>
  </div>
</div>