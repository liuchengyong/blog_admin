let getSideBarAction = () => {
	var param = {
		code : 0,
		msg : 'success',
		result:[
			{id:'1',text:'控制台',path:'/'},
			{id:'2',text:'用户中心',child:[
				{id:'3',text:'账号管理',path:'/'},
				{id:'4',text:'账号管理',path:'/'},
				{id:'5',text:'账号管理',path:'/'},
				{id:'6',text:'账号管理',path:'/'},
			]},
			{id:'22',text:'权限管理',child:[
				{id:'1222',text:'账号管理',path:'/'},
				{id:'12222',text:'账号管理',path:'/'},
				{id:'1111',text:'账号管理',path:'/'},
				{id:'1444',text:'账号管理',path:'/'},
			]},
			{id:'244',text:'角色管理',child:[
				{id:'1555',text:'账号管理',path:'/'},
				{id:'15',text:'账号管理',path:'/'},
				{id:'155',text:'账号管理',path:'/'},
				{id:'144',text:'账号管理',path:'/'},
			]},
			{id:'555',text:'系统配置',child:[
				{id:'166666',text:'账号管理',path:'/'},
				{id:'1666666',text:'账号管理',path:'/'},
				{id:'16666666',text:'账号管理',path:'/'},
				{id:'166666666',text:'账号管理',path:'/'},
			]},
			{id:'27777',text:'统计信息',child:[
				{id:'1777777',text:'账号管理',path:'/'},
				{id:'17777777',text:'账号管理',path:'/'},
				{id:'177777777',text:'账号管理',path:'/'},
				{id:'1777777774',text:'账号管理',path:'/'},
			]}
		]
	}


	return dispatch =>{
		dispatch({ type: 'SIDEBAR_SUCCESS', param:param});
	}
}
export default getSideBarAction; 