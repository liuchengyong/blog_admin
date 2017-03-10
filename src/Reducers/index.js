import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import about from 'reducers/about';
import sideBar from 'reducers/sideBar';
import user from 'reducers/user';
import loading from 'reducers/loading';
import model from 'reducers/model';
import form from 'reducers/form';

// status :init progress success error
const defaults = {};

const reducers = {
	user,
	loading,
    counter,
    about,
    sideBar,
    model,form
};

export default combineReducers(Object.assign(defaults, reducers));
