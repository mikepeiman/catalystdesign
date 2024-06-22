<script>
	import {
		IconBrandLinkedin,
		IconBrandYoutube,
		IconBrandFacebook,
		IconBrandInstagram,
		IconMap
	} from '@tabler/icons-svelte';

	let footerLinks = [
		{
			name: 'Home',
			href: '#'
		},
		{
			name: 'About',
			href: '#'
		},
		{
			name: 'Services',
			href: '#'
		},
		{
			name: 'Contact',
			href: '#'
		},
		{
			name: 'Blog',
			href: '#'
		},
		{
			name: 'Portfolio',
			href: '#'
		}
	];
</script>

<footer class="bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
	<div class="w-screen mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
		<nav class="footer-grid -mx-5 -my-2 flex justify-between" aria-label="Footer">
			<!-- Left section -->
			<!-- <IconMap class="w-5 h-5 mr-2 text-gray-400" /> -->
			<!-- <div class="flex justify-between items-start"> -->
			<div class="grid-area-logo flex flex-col items-start justify-start border-r-[1px] border-zinc-700">
				<div class="px-5 py-2">
					<div class="flex items-center justify-center">
						<a href="#" class="flex flex-col sm:flex-row sm:justify-center items-start sm:items-center align-middle">
							<img src="images/logo-blue.svg" alt="Company logo" class="h-8 sm:mr-3 mb-4 sm:mb-0 " />
							<span class="self-center text-xl font-semibold"> Catalyst Design & Development </span>
						</a>
					</div>
					<address class="flex items-center mt-4">
						216 Grovehill Cres<br /> Kitchener, ON, Canada<br /> N2R0K9
					</address>
				</div>
			</div>

			<div name="links" class="grid-area-links flex items-center justify-center border-r-[1px] border-zinc-700">
				<div class="w-fit px-12 text-base text-zinc-300 grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {#each footerLinks as link}
            <p>
              <a href={link.href} class="hover:text-cyan-400">{link.name}</a>
            </p>
          {/each}
        </div>
        </div>
        <div name="socials" class="grid-area-social flex flex-col items-center justify-center gap-y-4">
				<a href="#" class="text-gray-400 hover:text-gray-500 ">
					<IconBrandFacebook class="w-5 h-5" />
				</a>
				<a href="#" class="text-gray-400 hover:text-gray-500">
					<IconBrandInstagram class="w-5 h-5" />
				</a>
				<a href="#" class="text-gray-400 hover:text-gray-500 ">
					<IconBrandLinkedin class="w-5 h-5" />
				</a>
			</div>

		</nav>

		<div class="mt-8 border-t border-zinc-700 pt-6 pb-2 items-start align-middle">
			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Catalyst Web Design. All rights reserved.
			</p>
		</div>
	</div>
</footer>

<style>
	.footer-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas: 'logo links social';
		width: 100%;
	}
</style>
