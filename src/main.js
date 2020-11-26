import Vue from 'vue'
import App from './app'
import store from './store'

import i18n from './i18n'

import 'pannellum/build/pannellum.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import './assets/styles/main.scss'
import MlComponents from './modules/ml-components'

Vue.config.productionTip = false
Vue.use(MlComponents)

new Vue({
	store,
	i18n,
	render: (h) => h(App)
}).$mount('#app')
