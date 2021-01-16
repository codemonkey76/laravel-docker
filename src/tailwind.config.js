const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                asg: {
                    default: '#80699d',
                    dark: '#793386',
                    '300': '#a283c7',
                    '400': '#8d72ad',
                    '500': '#80699d',
                    '600': '#6f588c',
                    '700': '#4e3a66'
                },
                cyan: colors.cyan,
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
