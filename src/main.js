import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* element */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

/* normalize */
import 'normalize.css'

/* i18n */
import english from '@/locales/en/app.json'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    locale: 'en',
    messages: { en: english }
})

createApp(App).use(store).use(router).mount('#app')
