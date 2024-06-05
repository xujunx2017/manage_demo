<template>
	<el-menu default-active="2" class="el-menu-vertical-demo" :collapse-transition="collapsetransition"
		:collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
		<div v-show="isCollapse ? flase :true" class="responsive-image">
			<img :src="img" />
			<h3>后台管理系统</h3>
		</div>
		<el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
			<i :class="`el-icon-${item.icon}`"></i>
			<span slot="title">{{item.label}}</span>
		</el-menu-item>
		<el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
			<template slot="title">
				<i :class="`el-icon-${item.icon}`"></i>
				<span>{{item.label}}</span>
			</template>
			<el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
				<el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>

<script>
	export default {
		data() {
			return {
				img: require("@/assets/logo.png"),
				collapsetransition: false, // 不开启折叠动画
				menuData: [{
						path: '/',
						name: 'home',
						label: '首页',
						icon: 's-home'
					},
					{
						label: '其他',
						icon: 'location',
						children: [{
								path: '/page1',
								name: 'page1',
								label: '页面1',
								icon: 'setting'
							},
							{
								path: '/page2',
								name: 'page2',
								label: '页面2',
								icon: 'setting'
							}
						]
					}

				]
			}
		},
		computed: {
			//无子菜单
			//filter参考：https://blog.csdn.net/yezi153/article/details/120982522
			noChildren() {
				return this.menuData.filter(item => !item.children)
			},
			//有子菜单
			hasChildren() {
				return this.menuData.filter(item => item.children)
			},
			//通过 store.state 来获取状态对象
			isCollapse() {
				return this.$store.state.tab.isCollapse
			}

		},
		methods: {
			//点击左侧菜单栏
			clickMenu(item) {
				console.log(item)
				//当前页面与跳转页面不一致才允许跳转
				if (this.$route.path !== item.path && !(this.$route.path == '/home' && item.path == '/')) {
					this.$router.push(item.path)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}

	.el-menu {
		height: 100vh;
		border-right: none  //右边框
	}

	.responsive-image {

		display: flex;
		justify-content: flex-start;
		align-items: center;

		img {
			width: 50px;
			height: 50px;
			object-fit: contain;
			/* 控制图片在容器内缩放时的显示方式 */
		}

		h3 {
			font-size: 16px;
			color: #fff;
			font-weight: 400;
		}
	}
</style>