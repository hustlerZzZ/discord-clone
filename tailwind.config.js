/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "cloud-image":
                    "url('/src/assets/center_bg_landing_header.svg')",
                "left-image": "url('/src/assets/left_bg_landing_header.svg')",
                "right-image": "url('/src/assets/right_bg_landing_header.svg')",
                "tiny-image": "url('/src/assets/tiny_stars_landing.svg')",
                "login-image": "url(/src/assets/login_bg.svg)",
            },
            colors: {
                "blue-primary": "#5865f2",
                "blue-secondary": "#404eed",
                "blue-tertiary": "#5865f2",
                "black-primary": "#202225",
                "black-secondary": "#23272a",
                "black-tertiary": "#2f3136",
                "gray-primary": "#292b2f",
                "gray-secondary": "#36393f",
                "gray-tertiary": "#4f545c",
                "light-red": "#ed4245",
                "light-green": "#3ba55d",
                "light-orange": "#f26522",
                "light-gray": "#f6f6f6",
            },
            fontFamily: {
                Inter: ["Inter", "sans-serif"],
                Noto: ["Noto Sans", "sans-serif"],
                ManRope: ["Manrope", "sans-serif"],
            },
        },
    },
    plugins: [],
};
