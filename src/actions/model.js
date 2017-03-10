


export const showModel = data => {
	return dispatch => {
		dispatch({type:'model_show',data:data})
	}
}

export const hideModel = () => {
	return dispatch => {
		dispatch({type:'model_hide'})
	}
}
