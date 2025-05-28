// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                primary: {
                    50: '{sky.50}',
                    100: '{sky.100}',
                    200: '{sky.200}',
                    300: '{sky.300}',
                    400: '{sky.400}',
                    500: '{sky.500}',
                    600: '{sky.600}',
                    700: '{sky.700}',
                    800: '{sky.800}',
                    900: '{sky.900}',
                    950: '{sky.950}'
                },
            },
            dark: {
                primary: {
                    50: '{sky.50}',
                    100: '{sky.100}',
                    200: '{sky.200}',
                    300: '{sky.300}',
                    400: '{sky.400}',
                    500: '{sky.500}',
                    600: '{sky.600}',
                    700: '{sky.700}',
                    800: '{sky.800}',
                    900: '{sky.900}',
                    950: '{sky.950}'
                }
            }
        }
    },
});
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
    target: 'static',
    // ssr: false,

    css: [
        '~/assets/css/main.css',
        '~/assets/fa-6.4.0/css/all.css',
        'primeicons/primeicons.css',
        '~/assets/scss/style.scss'
    ],

    primevue: {
        options: {
            theme: {
                preset: MyPreset,
                options: {
                    prefix: 'p',
                    darkModeSelector: false || 'html.dark',
                    cssLayer: false
                }
            }
        }
    },

    colorMode: {
        preference: 'light',
        fallback: 'light',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },

	modules: ["@nuxt/image", "@primevue/nuxt-module", "@nuxtjs/color-mode", "@nuxt/icon", "@nuxtjs/tailwindcss"],
})
