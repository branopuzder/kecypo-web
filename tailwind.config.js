module.exports = {
    purge: {
        enabled: true,
        content: ["./*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "kc-black": {
                    DEFAULT: "#202020",
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
