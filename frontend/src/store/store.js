import Vue from 'vue'
import Vuex from 'vuex'
import tab from "./tag.js"

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		tab
	}
})


export default store