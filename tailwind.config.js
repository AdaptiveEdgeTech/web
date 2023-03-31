/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'gradient-1': {
                    '0%,16.667%,to': {
                        opacity: 0
                    },
                    '33.333%,83.333%': {
                        opacity: 1
                    }
                },
                'gradient-2': {
                    '0%,16.667%,66.667%,to': {
                        opacity: 1
                    },
                    '33.333%,50%': {
                        opacity: 0
                    }
                },
                'gradient-3': {
                    '0%,50%,to': {
                        opacity: 1
                    },
                    '66.667%,83.333%': {
                        opacity: 0
                    }
                }
            }
        },
        animation: {
            '<gradient-1>': 'gradient-1 8s infinite',
            'gradient-2': 'gradient-2 8s infinite',
            'gradient-3': 'gradient-3 8s infinite',
        }
    },
    plugins: [],
}
