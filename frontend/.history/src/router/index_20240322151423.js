//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//引用home页面
import Home from '../views/home.vue';


//定义routes路由的集合，数组类型
const routes = [
	//单个路由均为对象类型，path代表的是路径，component代表组件
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',//登录
		name: 'Login',
		component: () => import('../components/Login.vue')
	},
	{
		path: '/home', //主页
		name: 'home',
		component: Home
	},
]


//第三方库需要use一下才能用
Vue.use(VueRouter)
//实例化VueRouter并将routes添加进去
const router = new VueRouter({
	//ES6简写，等于routes：routes
	routes
});

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

//抛出这个这个实例对象方便外部读取以及访问
export default router