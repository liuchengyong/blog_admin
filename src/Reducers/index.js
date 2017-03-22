import { combineReducers } from 'redux';


import sidebar from 'reducers/sidebar';
import user from 'reducers/user';
import loading from 'reducers/loading';
import model from 'reducers/model';
import form from 'reducers/form';
import path from 'reducers/path';


import counter from 'reducers/counter';
import about from 'reducers/about';

// status :init progress success error
const defaults = {};

const reducers = {

    user,
    loading,
    sidebar,
    model,
    form,
    path,



    counter,
    about


};

export default combineReducers(Object.assign(defaults, reducers));
