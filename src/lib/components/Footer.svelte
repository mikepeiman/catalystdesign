<script>
	import {
		IconBrandTwitter,
		IconBrandYoutube,
		IconBrandFacebook,
		IconBrandInstagram
	} from '@tabler/icons-svelte';
	import { IconMap } from '@tabler/icons-svelte';
</script>

<footer class="bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
	<div class="w-full mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
		<nav class="-mx-5 -my-2 flex flex-wrap justify-around justify-center" aria-label="Footer">
			<!-- Left section -->
      <!-- <IconMap class="w-5 h-5 mr-2 text-gray-400" /> -->
			<div class="flex">
        <div class="flex flex-col items-start justify-start">
                <div class="px-5 py-2">
                  <div class="flex items-center justify-center">
                    <a href="#" class="flex items-center">
                      <img src="images/logo-blue.svg" alt="Company logo" class="h-8 mr-3" />
                      <span class="self-center text-xl font-semibold"> Catalyst Design & Development </span>
                    </a>
                  </div>
                  <address class="flex items-center mt-4">
                    216 Grovehill Cres<br> Kitchener, ON, Canada<br> N2R0K9
                  </address>
                </div>
              </div>
        <!-- Links -->
        <div class="px-5 py-2">
          <p class="text-sm text-gray-500">
            <a href="#services" class="hover:text-gray-600">Services</a>
          </p>
          <p class="text-sm text-gray-500">
            <a href="#work" class="hover:text-gray-600">Work</a>
          </p>
          <p class="text-sm text-gray-500">
            <a href="#team" class="hover:text-gray-600">Team</a>
          </p>
          <p class="text-sm text-gray-500">
            <a href="#contact" class="hover:text-gray-600">Contact</a>
          </p>
        </div>
      </div>

			<!-- Social icons -->
			<div class="flex justify-center px-5 py-2">
				<a href="#" class="text-gray-400 hover:text-gray-500">
					<IconBrandFacebook class="w-5 h-5" />
				</a>

				<a href="#" class="text-gray-400 hover:text-gray-500 ml-3">
					<IconBrandFacebook class="w-5 h-5" />
				</a>

				<a href="#" class="text-gray-400 hover:text-gray-500 ml-3">
					<IconBrandFacebook class="w-5 h-5" />
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
