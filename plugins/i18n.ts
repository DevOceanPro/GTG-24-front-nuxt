import {createI18n} from 'vue-i18n'
import en from '../locales/en.json'
import de from '../locales/de.json'

export default defineNuxtPlugin(({vueApp}) => {

    const lang = useCookie('lang').value?.toString() || "de"

    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: lang,
        messages: {
            en,
            de
        }
    });

    vueApp.use(i18n);
});
