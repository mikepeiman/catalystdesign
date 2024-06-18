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

<section
	name="social"
	class="bg-white dark:bg-gray-900 flex items-center  justify-center py-20 border-b-cyan-300 border-b-4"
>
	<div class="max-w-screen-2xl flex">
    {#each socialData as item}
      <div class="mx-4 border-cyan-400/40 border-solid border-l flex">
        <div
          class="max-w-md mx-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-md p-4 flex flex-col items-center"
        >
          <div class="flex justify-center mb-4 w-24 items-center">
            <img src={item.avatar} alt={item.name} class="w-full h-full rounded-full" />
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-lg font-bold text-white">{item.name}</h3>
            <div class="flex justify-center mb-4">
              {#each Array(item.stars).fill(0) as _}
                <IconStarFilled class="text-2xl text-yellow-400" />
              {/each}
            </div>
          </div>
        </div>
        <p class="text-gray-600 dark:text-gray-400">{item.description}</p>
      </div>
    {/each}
  </div>
</section>
