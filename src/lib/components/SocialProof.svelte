<script lang="ts">
	let socialData = [
		{
			name: 'Analise',
			avatar: './images/avatars/avatar-1.jpg',
			stars: 5,
			description:
				"The team at Catalyst did an amazing job on our website redesign. Their attention to detail and creative vision have taken our online presence to the next level. We've seen a significant increase in engagement and conversions since the launch."
		},
		{
			name: 'Davinder',
			avatar: './images/avatars/avatar-2.jpg',
			stars: 5,
			description:
				'Catalyst exceeded our expectations in every way. Their expertise in UI/UX design and development has helped us to create a website that truly reflects our brand values. Their team is professional, responsive, and a pleasure to work with.'
		},
		{
			name: 'Kurtis',
			avatar: './images/avatars/avatar-3.jpg',
			stars: 5,
			description:
				"We were blown away by the quality of work and the level of service provided by Catalyst. Their team took the time to understand our business goals and objectives, and delivered a website that has exceeded our expectations. We couldn't be happier with the result!"
		}
	];

	import { IconStar, IconStarFilled } from '@tabler/icons-svelte';
</script>

<div class="flex w-full items-center justify-center">
  {#each Array(5).fill(0) as _}
  <IconStarFilled class="w-12 h-12 mx-4 my-0 p-0 -mt-6 text-yellow-400 z-10" />
  {/each}
</div>
<section
	name="social"
	class="bg-white dark:bg-gray-900 flex flex-col items-center text-black dark:text-white justify-center -mt-6 py-20 border-b-cyan-300 border-b-4"
>
	<div class="grid max-w-screen-md w-full lg:w-3/4 2xl:w-1/2  px-4 lg:max-w-screen-2xl lg:flex">
		{#each socialData as item}
			<div class="social-item mx-0 xl:mx-2 2xl:mx-4 grid justify-start items-start">
				<div class="flex flex-col items-center">
					<div class="flex mb-4 w-24">
						<img src={item.avatar} alt={item.name} class="w-full h-full rounded-full" />
					</div>
          <h3 class="text-lg font-bold">{item.name}</h3>
          <div class="flex justify-center mb-4">
            {#each Array(item.stars).fill(0) as _}
              <IconStarFilled class="text-2xl text-yellow-400" />
            {/each}
          </div>
					<div
						class="max-w-md mx-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-md p-4 flex items-center"
					>
						<p class="text-gray-600 dark:text-gray-400">{item.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.social-item {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
</style>
