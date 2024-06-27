<script>
	import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconSquareRoundedX } from '@tabler/icons-svelte';
  </script>
  
  <footer class="px-4 divide-y bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
	  <div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		  <div class="lg:w-1/3">
			  <a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 lg:justify-start">
				  <div class="flex items-center justify-center w-12 h-12 rounded-full bg-none">
					  <img src="images/logo-blue.svg" alt="" srcset="">
				  </div>
				  <span class="self-center text-2xl font-semibold">Catalyst Design & Development</span>
			  </a>
		  </div>
		  <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			  <div class="space-y-3">
				  <h3 class="tracking-wide uppercase text-gray-900 dark:text-gray-100">Product</h3>
				  <ul class="space-y-1">
					  <li>
						  <a rel="noopener noreferrer" href="#" class="hover:text-catalyst-600 dark:hover:text-catalyst-300">Features</a>
					  </li>
					  <li>
						  <a rel="noopener noreferrer" href="#" class="hover:text-catalyst-600 dark:hover:text-catalyst-300">Integrations</a>
					  </li>
					  <li>
						  <a rel="noopener noreferrer" href="#" class="hover:text-catalyst-600 dark:hover:text-catalyst-300">Pricing</a>
					  </li>
					  <li>
						  <a rel="noopener noreferrer" href="#" class="hover:text-catalyst-600 dark:hover:text-catalyst-300">FAQ</a>
					  </li>
				  </ul>
			  </div>
			  <div class="space-y-3">
				  <h3 class="tracking-wide uppercase text-gray-900 dark:text-gray-100">Company</h3>
				  <ul class="space-y-1">
					  <li>
						  <a rel="noopener noreferrer" href="#" class="hover:text-catalyst-600 dark:hover:text-catalyst-300">Privacy</a>
					  </li>
					  <li>
						  <a rel="noopener noreferrer" href="#" class="hover:text-catalyst-600 dark:hover:text-catalyst-300">Terms of Service</a>
					  </li>
				  </ul>
			  </div>
			  <div class="space-y-3">
				  <h3 class="uppercase text-gray-900 dark:text-gray-100">Developers</h3>
				  <ul class="space-y-1">
					  <li>
						  <a rel="noopener noreferrer" href="#" class="hover:text-catalyst-600 dark:hover:text-catalyst-300">Public API</a>
					  </li>
					  <li>
						  <a rel="noopener noreferrer" href="#" class="hover:text-catalyst-600 dark:hover:text-catalyst-300">Documentation</a>
					  </li>
					  <li>
						  <a rel="noopener noreferrer" href="#" class="hover:text-catalyst-600 dark:hover:text-catalyst-300">Guides</a>
					  </li>
				  </ul>
			  </div>
			  <div class="space-y-3">
				  <div class="uppercase text-gray-900 dark:text-gray-100">Social media</div>
				  <div class="flex justify-start space-x-3">
					  <a rel="noopener noreferrer" href="#" title="Facebook" class="flex items-center p-1 text-gray-500 hover:text-catalyst-600 dark:text-gray-400 dark:hover:text-catalyst-300">
						  <IconBrandFacebook size={20} />
					  </a>
					  <a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center p-1 text-gray-500 hover:text-catalyst-600 dark:text-gray-400 dark:hover:text-catalyst-300">
						  <IconBrandTwitter size={20} />
					  </a>
					  <a rel="noopener noreferrer" href="#" title="Instagram" class="flex items-center p-1 text-gray-500 hover:text-catalyst-600 dark:text-gray-400 dark:hover:text-catalyst-300">
						  <IconBrandInstagram size={20} />
					  </a>
				  </div>
			  </div>
		  </div>
	  </div>
	  <div class="py-6 text-sm text-center text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Catalyst Web Design. All rights reserved.</div>
  </footer>