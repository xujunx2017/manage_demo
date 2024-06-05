<template>
	<div class='login-container'>
		<div class="login_conent">
			<!-- 头部图片 -->
			<div class='login_logo'>
				<img src="../assets/logo.png" />
			</div>
			<!-- form表单 -->
			<el-form :model="loginForm" :rules="loginFormRul" ref="loginFormRel" label-width="100px" class="login_box">
				<el-form-item type="text" label="账号:" prop="username">
					<el-input prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
				</el-form-item>
				<el-form-item label="密码:" prop="password">
					<el-input v-model="loginForm.password" :type="showPassword ?'password':'text'">
						<!-- slot="prefix" class内icon图标才会显示 参考：https://blog.csdn.net/weixin_41192489/article/details/133940676-->
						<i slot="prefix" @click="IconClick">
							<div v-if="showPassword" class="el-icon-lock"></div>
							<div v-else class="el-icon-unlock"></div>
						</i>
					</el-input>
				</el-form-item>
				<el-form-item class="btns">
					<el-button type="primary" @click="login">登录</el-button>
					<el-button type="info" @click="reset">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				//表单请求数据
				loginForm: {
					username: 'admin',
					password: '123456'
				},
				//表单验证规则
				loginFormRul: {
					// usn和prop对应
					username: [
						// blur表示鼠标失焦时触发
						{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 15,
							message: '长度在 3 到 15 个字符',
							trigger: 'blur'
						}
					]
				},
				showPassword: true, //是否显示密码
			}
		},
		methods: {
			IconClick() {
				console.log(this.showPassword)
				this.showPassword = !this.showPassword;
			},
			//登录
			login() {
				//登录前校验规则
				this.$refs.loginFormRel.validate(vaild => {
					if (!vaild) {
						return false
					}
					//请求登录接口
					this.$http.post('login', this.loginForm).then(res => {
							window.sessionStorage.setItem('token',res.data.data.token);
							this.$message.success("登录成功")
							this.$router.push('/home')
						})
						.catch(err => {
							console.log(err)
							this.$message.error(err)
						})

				})
			},
			//重置
			reset() {
				this.loginForm.username='';
				this.loginForm.password='';
			}
		}
	}
</script>

<style scoped>
	.login-container {
		/* 参考：https://www.coonote.com/html-note/display-flex.html */
		display: flex;
		/* 左右对齐 */
		justify-content: center;
		background: #2A4B6B;
		height: 100%;
		/* 交叉轴的中点对 */
		align-items: center;
		position: relative;
	}

	.login_conent {
		width: 450px;
		height: 300px;
		background: #fff;
		/* 边框阴影 */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		/* 圆角 */
		border-radius: 10px;
		/* relative（相对定位）：元素保持其原始位置不变，通过设置 `top`、`left`、`right` 或 `bottom` 属性来相对于其原始位置进行偏移。 */
		position: relative;
	}

	.login_logo {
		width: 150px;
		height: 150px;
		/* absolute（绝对定位）：元素从文档流中移除，并相对于最近的非静态定位祖先元素（如果有）进行定位 */
		position: absolute;
		top: -75px;
		left: 50%;
		margin-left: -75px;
		border: 1px, solid, #eee;
		border-radius: 50%;
		background: #fff;
		padding: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	}

	.login_logo img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: rgb(214, 198, 198)
	}

	.login_box {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.el-input {
		width: 300px;
		margin-right: 40px;
	}

	.btns {
		display: flex;
		width: 100%;
	}

	.el-button {
		margin-left: 40px;
	}
</style>