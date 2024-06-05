export default {
	state : {
	isCollapse : false //控制菜单展开与收起
	},
	mutations:{
		//修改点击按钮菜单是否展开
		collapseMenu(state) {
			state.isCollapse= !state.isCollapse
		}
	}
}