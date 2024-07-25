// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'light',
    },
})

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(vuetify)
})
