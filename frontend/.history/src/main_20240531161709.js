import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue' 
// 引用router.js
import router from './router'
//导入样式
import './assets/css/global.css';
//导入字体文件
import './assets/fonts/iconfont.css';
import store from './store/store.js'

import axios from 'axios';


Vue.prototype.$http = axios;

// 设置axios请求根路径
axios.defaults.baseURL = 'http://localhost:8888//api/private/v1/'
Vue.config.productionTip = false

Vue.use(ElementUI);



// 全局路由守卫，如果不是登录状态，则到登录页面  路由拦截
router.beforeEach((to, from, next) => {
	// 有token为登录状态
	if (sessionStorage.token) {
		console.log("__登录成功！_")
		next();
	} else {
		if (to.path === "/login") {
			next();
		} else {
			next("/login");
		}
	}
});

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')


