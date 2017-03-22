


export const setPath = data => {
	return dispatch => {
		dispatch({type:'set_path',data:data})
	}
}
