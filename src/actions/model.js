/**
 * [description] 显示对话框
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const showModel = data => {
    return { type: 'model_show', data: data }
}

/**
 * [description] 隐藏对话框
 * @return {[type]} [description]
 */
export const hideModel = () => {
    return { type: 'model_hide' }
}
