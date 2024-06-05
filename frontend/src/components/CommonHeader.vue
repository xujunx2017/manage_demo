<template>
	<div class="header-container">
		<div class="l-content">
			<el-button @click="handeMenu" icon="el-icon-menu" size="mini"></el-button>
			<!-- 面包屑 -->
			<span class="text">首页</span>
		</div>
		<div class="r-content">
			<el-dropdown @command="handleCommand">
			  <span class="el-dropdown-link">
			    <img class="user" src="../assets/user.png"/>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item command='logout'>退出登录</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
			<span class="loginUser">欢迎,{{ username }}登录</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: 'admin'
			}
		},
		methods: {
			// 点击下拉菜单，下拉菜单点击参考方法：https://element.eleme.cn/#/zh-CN/component/dropdown#dropdown-menu-item-attributes
			handleCommand(command) {
				if (command == 'logout') {
          window.sessionStorage.clear()
					//跳到登录页
					this.$router.push('/login')

				}
			},
			//通过 store.commit 方法触发状态变更
			handeMenu(){
				this.$store.commit('collapseMenu')
			}
		}
	}
</script>

<style lang="less" scoped>
.header-container{
		padding: 0 20px;
		height: 60px;
		background-color: #333;
		display: flex;
		justify-content: space-between;
		align-items: center; //上下居中
	}
.text {
	color: #fff;
	margin-left: 10px;
	font-size: 14px;
}
.user {
	width: 40px;
	height: 40px;
	border-radius: 50%; //外边框圆角
}
.loginUser {
	font-size: 8px;
	color: #fff;
	margin-left: 4px;
}
</style>