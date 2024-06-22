import {plugin, addBase, addComponents, addUtilities, matchUtilities, flattenColorPalette} from 'tailwindcss/plugin';

// function addVariablesForColors({ addBase, theme }: any) {
//     let allColors = flattenColorPalette(theme('colors'));
//     let newVars = Object.fromEntries(
//         Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//     );

//     addBase({
//         ':root': newVars
//     });
// }

export default plugin(({ addComponents }) => {
    addBase({
        ':root': {
            '--grid-bg-color': 'theme(colors.cyan.300)',
            '--grid-bg-color-dark': 'theme(colors.cyan.300)',
            '--grid-bg-opacity': '0.2',
            '--grid-bg-weight': '1px',
            '--grid-bg-square-size': '32px',
        }
    });

    // keyframes animations
    addComponents({
        '@keyframes pulse': {
            '0%': {
                transform: 'scale(1)',
            },
            '50%': {
                transform: 'scale(1.1)',
            },
            '100%': {
                transform: 'scale(1)',
            },
        },

        '@keyframes rotate': {
            '0%': {
                transform: 'rotate(0deg)',
            },
            '100%': {
                transform: 'rotate(360deg)',
            },
        },

        '.grid-bg': {
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100%',
            width: '100%',
            backgroundColor: 'var(--grid-bg-color)',
            opacity: 'var(--grid-bg-opacity)',
            zIndex: '-1',
            backgroundImage: 'url("/images/grid.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'var(--grid-bg-square-size)',
        },

        '.grid-bg-dark': {
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100%',
            width: '100%',
            backgroundColor: 'var(--grid-bg-color-dark)',
            opacity: 'var(--grid-bg-opacity)',
            zIndex: '-1',
            backgroundImage: 'url("/images/grid.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'var(--grid-bg-square-size)',
        },

        '.pulse': {
            animation: 'pulse 2s infinite',
        },

        '.rotate': {
            animation: 'rotate 2s infinite',
        },
    });

    matchUtilities({
        'grid-bg': (value: any) =>({
            backgroundColor: value,
        }),
    });
});