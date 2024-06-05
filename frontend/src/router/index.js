//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
// //引用home页面
// import Home from '../views/Home.vue';


//定义routes路由的集合，数组类型
const routes = [
	//单个路由均为对象类型，path代表的是路径，component代表组件
	{
		path: '/',
		redirect: '/home',
		component:() => import('../views/Main.vue'),
		children:[
			//子路由
			{
				path: 'home', //主页
				name: 'home',
				component: () => import('../views/Home.vue'),
			},
			{
				path: 'page1', //主页
				name: 'page1',
				component: () => import('../views/PageOne.vue'),
			},
			{
				path: 'page2', //主页
				name: 'page2',
				component: () => import('../views/PageTwo.vue'),
			},
			]
			
	},
	{
		path: '/login',//登录
		name: 'Login',
		component: () => import('../components/Login.vue')
	}
]


//第三方库需要use一下才能用
Vue.use(VueRouter)
//实例化VueRouter并将routes添加进去
const router = new VueRouter({
	//ES6简写，等于routes：routes
	routes
});


//抛出这个这个实例对象方便外部读取以及访问
export default router