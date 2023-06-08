// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/content"],
    // css: ["~/assets/css/style.css"],
    css: ["@/assets/css/reset.css", "@/assets/css/style.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/css/_variables.scss";',
                },
            },
        },
    },
    content: {
        // https://content.nuxtjs.org/api/configuration/
        highlight: {
            // コードハイライトを有効化する場合はテーマを設定
            theme: "github-dark-dimmed",
        },
    },
    buildModules: [
        "@nuxtjs/google-fonts", //追加
    ],
    googleFonts: {
        families: {
            NotoSansJP: [100, 400, 500, 700],
        },
    },
});
