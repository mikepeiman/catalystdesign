<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import {
		IconPalette,
		IconCode,
		IconRocket,
		IconTools,
		IconChartBar,
		IconBrush,
		IconDeviceLaptop,
		IconBuildingStore,
		IconServer,
		IconCloudUpload,
		IconRefresh,
		IconShieldCheck,
		IconSearch,
		IconTrendingUp,
		IconDeviceAnalytics,
		IconMail
	} from '@tabler/icons-svelte';
	import DotGridWave from './DotGridWave.svelte';
	import { isDarkMode } from '$lib/utils/darkModeStore.js';
    import { browser } from '$app/environment';
	let activeTab = 'Design';
    let darkMode = "dark"
$: browser ? darkMode = $isDarkMode : null
	const processSteps = [
		{ id: 'Design', label: 'Design' },
		{ id: 'Develop', label: 'Develop' },
		{ id: 'Deploy', label: 'Deploy' },
		{ id: 'Maintain', label: 'Maintain' },
		{ id: 'Growth', label: 'Growth' }
	];

	const processFeatures = {
		Design: [
			{
				id: 1,
				icon: IconBrush,
				title: 'UI/UX Design',
				description:
					'Create intuitive and visually appealing interfaces tailored to your local business needs.'
			},
			{
				id: 2,
				icon: IconPalette,
				title: 'Brand Identity',
				description: 'Develop a cohesive brand identity that resonates with your local community.'
			},
			{
				id: 3,
				icon: IconDeviceLaptop,
				title: 'Responsive Mockups',
				description: 'Design mockups that look great on all devices, from mobile to desktop.'
			},
			{
				id: 4,
				icon: IconBuildingStore,
				title: 'Local Business Focus',
				description: 'Incorporate design elements that appeal to your specific local market.'
			}
		],
		Develop: [
			{
				id: 5,
				icon: IconCode,
				title: 'Clean Coding',
				description: 'Write efficient, maintainable code following best practices and standards.'
			},
			{
				id: 6,
				icon: IconDeviceLaptop,
				title: 'Cross-Browser Compatibility',
				description: 'Ensure your website works flawlessly across all major browsers.'
			},
			{
				id: 7,
				icon: IconTools,
				title: 'Custom Functionality',
				description: 'Develop unique features tailored to your local business requirements.'
			},
			{
				id: 8,
				icon: IconServer,
				title: 'Backend Integration',
				description:
					'Seamlessly connect your website with necessary backend services and databases.'
			}
		],
		Deploy: [
			{
				id: 9,
				icon: IconCloudUpload,
				title: 'Smooth Deployment',
				description: 'Deploy your website efficiently with minimal downtime.'
			},
			{
				id: 10,
				icon: IconRocket,
				title: 'Performance Optimization',
				description: 'Optimize your site for fast loading speeds and smooth user experience.'
			},
			{
				id: 11,
				icon: IconShieldCheck,
				title: 'Security Measures',
				description: 'Implement robust security protocols to protect your website and user data.'
			},
			{
				id: 12,
				icon: IconRefresh,
				title: 'Content Migration',
				description: 'Seamlessly transfer existing content to your newly developed website.'
			}
		],
		Maintain: [
			{
				id: 13,
				icon: IconTools,
				title: 'Regular Updates',
				description: 'Keep your website up-to-date with the latest features and security patches.'
			},
			{
				id: 14,
				icon: IconDeviceAnalytics,
				title: 'Performance Monitoring',
				description:
					"Continuously monitor your website's performance and make necessary adjustments."
			},
			{
				id: 15,
				icon: IconShieldCheck,
				title: 'Security Audits',
				description: 'Conduct regular security audits to ensure your website remains protected.'
			},
			{
				id: 16,
				icon: IconMail,
				title: 'Support & Maintenance',
				description:
					'Provide ongoing support and maintenance to keep your website running smoothly.'
			}
		],
		Growth: [
			{
				id: 17,
				icon: IconSearch,
				title: 'SEO Optimization',
				description: 'Optimize your website for local search engines to improve visibility.'
			},
			{
				id: 18,
				icon: IconTrendingUp,
				title: 'Analytics & Insights',
				description: 'Track and analyze website performance to drive data-informed decisions.'
			},
			{
				id: 19,
				icon: IconChartBar,
				title: 'Conversion Optimization',
				description:
					'Continuously improve your website to increase conversions and customer engagement.'
			},
			{
				id: 20,
				icon: IconBuildingStore,
				title: 'Local Marketing Integration',
				description: 'Integrate your website with local marketing efforts for maximum impact.'
			}
		]
	};

	function setActiveTab(tab: string) {
		activeTab = tab;
	}

	function staggeredFlyFade(node, { delay = 0, duration = 300 }) {
		return {
			delay,
			duration,
			css: (t) => {
				const eased = cubicOut(t);
				return `
            opacity: ${eased};
            transform: translate3d(0, ${(1 - eased) * 20}px, 0);
          `;
			}
		};
	}

	function cubicOut(t) {
		const f = t - 1.0;
		return f * f * f + 1.0;
	}
</script>

<section
	name="process-features"
	class="py-12 max-w-[100vw] bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 relative overflow-hidden inset-0 bg-gradient-to-br from-zinc-100 via-fuchsia-100 to-sky-100 dark:from-gray-800 dark:via-sky-800 dark:to-purple-800 animate-gradient-xy"
>
	<DotGridWave
		dotColor={darkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}
		dotSpacing={20}
		dotRadius={1}
		waveDuration={3000}
		maxScale={5}
	/>

	<div class="relative z-10">
		<div class="container mx-auto px-4">
			<div class="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl mb-12">
				<h2 class="text-2xl font-bold leading-none sm:text-4xl mb-4">
					Seamless Design to Growth Process
				</h2>
				<p class="px-4 sm:px-8">
					Elevate your local business with our comprehensive
					design-development-deploy-maintain-growth process. We transform your ideas into stunning,
					functional digital experiences that grow with your business.
				</p>
			</div>
			<div class="grid grid-areas-mobile gap-8">
				<div class="grid-in-tabs mx-auto flex overflow-x-auto md:overflow-x-visible self-center">
					{#each processSteps as step}
						<button
							class="flex-shrink-0 px-4 py-2 md:py-3 text-left border-b-2 md:border-t-2 md:border-b-0 transition-colors duration-200 ease-in-out"
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
				<div class="grid-in-cards">
					<div class="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
						{#each processFeatures[activeTab] as feature, index (feature.id)}
							<div
								class="group flex flex-col items-center justify-start space-y-3 md:items-start text-center md:text-left bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
								in:staggeredFlyFade={{ delay: index * 100, duration: 400 }}
								out:fade={{ duration: 200 }}
								animate:flip={{ duration: 300 }}
							>
								<svelte:component
									this={feature.icon}
									class="w-8 h-8 text-cyan-600 dark:text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
								/>
								<h5 class="text-xl font-semibold">{feature.title}</h5>
								<p class="text-sm flex-grow">{feature.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.grid-areas-mobile {
		grid-template-areas:
			'tabs'
			'cards';
	}

	.grid-areas-desktop {
		grid-template-areas: 'tabs cards';
		grid-template-columns: 1fr 3fr;
	}

	.grid-in-tabs {
		grid-area: tabs;
	}

	.grid-in-cards {
		grid-area: cards;
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}
	.animate-float {
		animation: float 6s ease-in-out infinite;
	}
	.animation-delay-2000 {
		animation-delay: 2s;
	}
	.animation-delay-4000 {
		animation-delay: 4s;
	}
	@keyframes gradient-xy {
		0%,
		100% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 100%;
		}
	}
	.animate-gradient-xy {
		animation: gradient-xy 15s ease infinite;
		background-size: 400% 400%;
	}
	.hex-grid {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #ffffff;
		background-image: linear-gradient(to right, rgb(0 0 0 / 0.05) 1px, transparent 1px),
			linear-gradient(to bottom, rgb(0 0 0 / 0.05) 1px, transparent 1px);
		background-size: 20px 34.64px;
		mask-image: repeating-linear-gradient(60deg, #000 0 5px, #0000 0 15px);
		-webkit-mask-image: repeating-linear-gradient(60deg, #000 0 5px, #0000 0 15px);
		animation: colorShift 15s infinite alternate;
	}

	@keyframes colorShift {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}

	.dark .hex-grid {
		background-color: #1f2937;
		background-image: linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
			linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px);
	}
	.dot-grid {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: radial-gradient(rgb(0 0 0 / 0.2) 1px, transparent 1px);
		background-size: 20px 20px;
		animation: colorShift 15s infinite alternate;
	}
	.dot-grid-wave {
		position: absolute;
		width: 200%;
		height: 200%;
		top: -50%;
		left: -50%;
		background-image: radial-gradient(circle, rgb(0 0 0 / 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
		animation:
			wave 15s infinite linear,
			colorShift 15s infinite alternate;
	}

	@keyframes wave {
		0%,
		100% {
			transform: rotate(0deg) scale(1);
		}
		25% {
			transform: rotate(2deg) scale(1.1) translateY(-1%);
		}
		50% {
			transform: rotate(0deg) scale(1);
		}
		75% {
			transform: rotate(-2deg) scale(0.9) translateY(1%);
		}
	}

	@keyframes colorShift {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}
	.dot-grid-wave {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
		animation: waveEffect 6s infinite linear;
	}

	@keyframes waveEffect {
		0%,
		100% {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
		50% {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 90%, 40% 70%, 20% 40%, 0 20%);
		}
	}

	.dark .dot-grid-wave {
		background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
	}

	.dot-grid-wave::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: inherit;
		background-size: inherit;
		animation: dotScale 12s infinite ease-in-out;
	}

	@keyframes dotScale {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(5);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes scaleWave {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(5);
		}
	}

	.dark .dot {
		background-color: rgba(255, 255, 255, 0.1);
	}

	@media (prefers-reduced-motion: reduce) {
		.dot {
			animation: none;
		}
	}

	@keyframes diagonalWave {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(-5%, -5%) scale(1.1);
		}
	}

	.dark .dot-grid-wave {
		background-image: radial-gradient(circle, rgb(255 255 255 / 1) 1px, transparent 1px);
	}

	@keyframes colorShift {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}

	.square-grid {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
			linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px);
		background-size: 20px 20px;
		animation: colorShift 15s infinite alternate;
	}

	@keyframes colorShift {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}

	.dark .square-grid {
		background-image: linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
			linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px);
	}

	/* Add custom styles for horizontal scrolling on small screens */
	@media (max-width: 768px) {
		.overflow-x-auto {
			-webkit-overflow-scrolling: touch;
			scrollbar-width: none; /* Firefox */
			-ms-overflow-style: none; /* Internet Explorer 10+ */
		}
		.overflow-x-auto::-webkit-scrollbar {
			/* WebKit */
			width: 0;
			height: 0;
		}
	}
</style>
