import Vue from 'vue'
import Vuex from 'vuex'
import datas from './response.json'

Vue.use(Vuex)

const Store = new Vuex.Store({
	actions: {},
	state: {
		data: datas.list,
		status: datas.status
	},
	getters: {
		products(state) {
			let arr = state.data
			let list = []
			arr.forEach((item) => {
				let ai = item
				ai.isCheck = false
				list.push(ai)
			})
			return list
		}
	},
	mutations: {}
})

export default Store
