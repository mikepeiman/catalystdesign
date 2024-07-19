<script>
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let activeTab = 0;

  const services = [
    {
      id: 0,
      title: "Website Design & Development",
      description: "Crafting stunning, functional websites for individuals and businesses.",
      icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      expanded: "Our expert team delivers bespoke website solutions that not only look great but also drive results. From responsive designs to e-commerce platforms, we create digital experiences that engage your audience and grow your online presence.",
      cta: "Start Your Web Project",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
    },
    {
      id: 1,
      title: "Modern Technology Consulting",
      description: "Empowering agencies with cutting-edge tech and streamlined processes.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      expanded: "Stay ahead of the curve with our modern technology consulting services. We help agencies optimize their workflows, implement the latest tools, and develop scalable processes that boost efficiency and drive innovation.",
      cta: "Revolutionize Your Agency",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Small Business Solutions",
      description: "Tailored software and processes to streamline your operations.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      expanded: "Unlock your small business's potential with our custom software and process solutions. From CRM systems to inventory management, we provide tailored tools that automate tasks, improve productivity, and fuel your growth.",
      cta: "Optimize Your Business",
      image: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  function setActiveTab(index) {
    activeTab = index;
  }
</script>

<div class="max-w-[100vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="relative p-6 md:p-16">
    <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
          Elevate Your Digital Presence
        </h2>

        <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
          {#each services as service, index}
            <button
              type="button"
              class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 {activeTab === index ? 'bg-white shadow-md' : ''}"
              id="tabs-with-card-item-{index + 1}"
              data-hs-tab="#tabs-with-card-{index + 1}"
              aria-controls="tabs-with-card-{index + 1}"
              role="tab"
              on:click={() => setActiveTab(index)}
            >
              <span class="flex">
                <svg class="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d={service.icon}/>
                </svg>
                <span class="grow ms-6">
                  <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">{service.title}</span>
                  <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">{service.description}</span>
                </span>
              </span>
            </button>
            {#if activeTab === index}
              <div transition:slide="{{ duration: 300, easing: quintOut }}">
                <p class="mt-2 text-gray-600 dark:text-gray-400">{service.expanded}</p>
                <a href="#" class="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">{service.cta}</a>
              </div>
            {/if}
          {/each}
        </nav>
      </div>

      <div class="lg:col-span-6">
        <div class="relative">
          <div>
            {#each services as service, index}
              <div id="tabs-with-card-{index + 1}" role="tabpanel" aria-labelledby="tabs-with-card-item-{index + 1}" class="{activeTab === index ? '' : 'hidden'}">
                <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src={service.image} alt={service.title}>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 grid grid-cols-12 size-full">
      <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
    </div>
  </div>
</div>