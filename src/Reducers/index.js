import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import about from 'reducers/about';
import sideBar from 'reducers/sideBar';
import user from 'reducers/user';

// status :init progress success error
const defaults = {};

const reducers = {
	user:user,
    counter: counter,
    about: about,
    sideBar: sideBar
};

export default combineReducers(Object.assign(defaults, reducers));
