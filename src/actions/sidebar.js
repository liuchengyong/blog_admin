export const initSidebar = () => {
    var data = {
        code: 0,
        msg: 'success',
        result: [
            { id: '1', text: '控制台', path: '/', pname: 'home' },

            { id: '1223', text: 'charts', path: '/charts', pname: 'charts' }, {
                id: '2',
                text: '用户中心',
                child: [
                    { id: '3', text: '我的资料', path: '/user/me', pname: 'me' },
                    { id: '4', text: '用户列表', path: '/user/list', pname: 'userList' },
                    { id: '5', text: '添加用户', path: '/user/add', pname: 'userAdd' },
                    { id: '6', text: '修改密码', path: '/user/updatePwd', pname: 'UserUpdatePwd' },
                ]
            }
        ]
    }
    return dispatch => {
        dispatch({ type: 'init_sidebar', data: data});
    }
}
