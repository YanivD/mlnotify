import { ClientApiConstructor } from './types'
import Vuex from 'vuex'
import VueGtag from 'vue-gtag'

import DefaultLayout from './layouts/Default.vue'
import './styles/index.scss'
import { VuexStore } from './store'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const client: ClientApiConstructor = async function(
	Vue: Vue.VueConstructor,
	{ appOptions, head, router },
): Promise<void> {
	head.htmlAttrs = { lang: 'en-US' }

	// GTag (Analytics)
	Vue.use(VueGtag, { config: { id: 'G-1C7PHXXTFE' } }, router)

	// Toasts
	Vue.use(VueToast)

	// Layout
	Vue.component('Layout', DefaultLayout)

	// Store
	Vue.use(Vuex)
	const store = new Vuex.Store(VuexStore)
	appOptions.store = store
}

export default client
