module.exports = {
    purge: {
        enabled: false,
        content: ["./*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "kc-black": {
                    DEFAULT: "#3B3B3B",
                },
                "kc-aqua": {
                    DEFAULT: "#8bbee0",
                },
                "kc-blue": {
                    DEFAULT: "#2e2c72",
                },
                "kc-green": {
                    DEFAULT: "#008e8c",
                },
                "kc-orange": {
                    DEFAULT: "#f47c25",
                },
                "kc-yellow": {
                    DEFAULT: "#ffd553",
                },
                "kp-purple": {
                    DEFAULT: "#5C1D6B",
                },
                "kp-yellow": {
                    DEFAULT: "#FDD602",
                },
                "kp-orange": {
                    DEFAULT: "#FF6F39",
                },
                "kp-pink": {
                    DEFAULT: "#FF3179",
                },
                "kp-purple-light": {
                    DEFAULT: "#B41EB2",
                },
                "kp-blue": {
                    DEFAULT: "#38A6F3",
                },
                "kp-green": {
                    DEFAULT: "#23D10C",
                },
                "kp-red": {
                    DEFAULT: "#D51636",
                },
            },
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
