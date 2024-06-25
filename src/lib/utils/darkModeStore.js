// src/darkModeStore.js
import { writable } from 'svelte/store';

function createDarkModeStore() {
    const { subscribe, set } = writable(false);

    function init() {
        const isDark = document.documentElement.classList.contains('dark');
        set(isDark);

        // Watch for changes to the 'dark' class
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDark = document.documentElement.classList.contains('dark');
                    set(isDark);
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }

    return {
        subscribe,
        init
    };
}

export const isDarkMode = createDarkModeStore();