// src/darkModeStore.js
import { readable } from 'svelte/store';

export const isDarkMode = readable(false, set => {
  // Function to check if dark mode is active
  const checkDarkMode = () => {
    const isDark = document.documentElement.classList.contains('dark');
    set(isDark);
  };

  // Initial check
  checkDarkMode();

  // Watch for changes to the 'dark' class
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        checkDarkMode();
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true });

  // Cleanup function
  return () => observer.disconnect();
});