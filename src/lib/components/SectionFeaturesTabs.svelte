<script lang="ts">
    import { fade } from 'svelte/transition';
    import { IconPalette, IconCode, IconRocket, IconTools, IconChartBar, IconBrush, IconDeviceLaptop, IconBuildingStore, IconServer, IconCloudUpload, IconRefresh, IconShieldCheck, IconSearch, IconTrendingUp, IconDeviceAnalytics, IconMail } from '@tabler/icons-svelte';
    
    let activeTab = 'Design';
    
    const processSteps = [
      { id: 'Design', label: 'Design' },
      { id: 'Develop', label: 'Develop' },
      { id: 'Deploy', label: 'Deploy' },
      { id: 'Maintain', label: 'Maintain' },
      { id: 'Growth', label: 'Growth' }
    ];
    
    const processFeatures = {
      Design: [
        { icon: IconBrush, title: 'UI/UX Design', description: 'Create intuitive and visually appealing interfaces tailored to your local business needs.' },
        { icon: IconPalette, title: 'Brand Identity', description: 'Develop a cohesive brand identity that resonates with your local community.' },
        { icon: IconDeviceLaptop, title: 'Responsive Mockups', description: 'Design mockups that look great on all devices, from mobile to desktop.' },
        { icon: IconBuildingStore, title: 'Local Business Focus', description: 'Incorporate design elements that appeal to your specific local market.' }
      ],
      Develop: [
        { icon: IconCode, title: 'Clean Coding', description: 'Write efficient, maintainable code following best practices and standards.' },
        { icon: IconDeviceLaptop, title: 'Cross-Browser Compatibility', description: 'Ensure your website works flawlessly across all major browsers.' },
        { icon: IconTools, title: 'Custom Functionality', description: 'Develop unique features tailored to your local business requirements.' },
        { icon: IconServer, title: 'Backend Integration', description: 'Seamlessly connect your website with necessary backend services and databases.' }
      ],
      Deploy: [
        { icon: IconCloudUpload, title: 'Smooth Deployment', description: 'Deploy your website efficiently with minimal downtime.' },
        { icon: IconRocket, title: 'Performance Optimization', description: 'Optimize your site for fast loading speeds and smooth user experience.' },
        { icon: IconShieldCheck, title: 'Security Measures', description: 'Implement robust security protocols to protect your website and user data.' },
        { icon: IconRefresh, title: 'Content Migration', description: 'Seamlessly transfer existing content to your newly developed website.' }
      ],
      Maintain: [
        { icon: IconTools, title: 'Regular Updates', description: 'Keep your website up-to-date with the latest features and security patches.' },
        { icon: IconDeviceAnalytics, title: 'Performance Monitoring', description: 'Continuously monitor your website\'s performance and make necessary adjustments.' },
        { icon: IconShieldCheck, title: 'Security Audits', description: 'Conduct regular security audits to ensure your website remains protected.' },
        { icon: IconMail, title: 'Support & Maintenance', description: 'Provide ongoing support and maintenance to keep your website running smoothly.' }
      ],
      Growth: [
        { icon: IconSearch, title: 'SEO Optimization', description: 'Optimize your website for local search engines to improve visibility.' },
        { icon: IconTrendingUp, title: 'Analytics & Insights', description: 'Track and analyze website performance to drive data-informed decisions.' },
        { icon: IconChartBar, title: 'Conversion Optimization', description: 'Continuously improve your website to increase conversions and customer engagement.' },
        { icon: IconBuildingStore, title: 'Local Marketing Integration', description: 'Integrate your website with local marketing efforts for maximum impact.' }
      ]
    };
    
    function setActiveTab(tab: string) {
      activeTab = tab;
    }
    </script>
    
    <section class="py-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div class="container mx-auto px-4">
        <div class="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
          <h2 class="text-2xl font-bold leading-none sm:text-4xl">Seamless Design to Growth Process</h2>
          <p class="px-4 sm:px-8 my-4">Elevate your local business with our comprehensive design-development-deploy-maintain-growth process. We transform your ideas into stunning, functional digital experiences that grow with your business.</p>
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/5 mb-4 md:mb-0">
            <div class="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible">
              {#each processSteps as step}
                <button
                  class="flex-shrink-0 px-4 py-2 md:py-3 text-left border-b-2 md:border-l-2 md:border-b-0 transition-colors duration-200 ease-in-out"
                  class:text-gray-900={activeTab === step.id}
                  class:dark:text-gray-100={activeTab === step.id}
                  class:border-cyan-600={activeTab === step.id}
                  class:dark:border-cyan-400={activeTab === step.id}
                  class:text-gray-600={activeTab !== step.id}
                  class:dark:text-gray-300={activeTab !== step.id}
                  class:border-gray-300={activeTab !== step.id}
                  class:dark:border-gray-600={activeTab !== step.id}
                  on:click={() => setActiveTab(step.id)}
                >
                  {step.label}
                </button>
              {/each}
            </div>
          </div>
          <div class="w-full md:w-4/5">
            <div class="grid gap-8 sm:grid-cols-2" in:fade={{ duration: 300 }}>
              {#each processFeatures[activeTab] as feature}
                <div class="flex flex-col items-center justify-center space-y-3 md:items-start text-center md:text-left">
                  <svelte:component this={feature.icon} class="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  <h5 class="text-xl font-semibold">{feature.title}</h5>
                  <p class="text-sm">{feature.description}</p>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <style>
      /* Add custom styles for horizontal scrolling on small screens */
      @media (max-width: 768px) {
        .overflow-x-auto {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
        }
        .overflow-x-auto::-webkit-scrollbar { /* WebKit */
          width: 0;
          height: 0;
        }
      }
    </style>