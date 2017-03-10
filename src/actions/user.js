

export const setUser = data =>{
	return dispatch => {
		dispatch({type:'user_init',data})
	}
}
