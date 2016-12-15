import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import about from 'reducers/about';
import sideBar from 'reducers/sideBar';


const defaults = {};

const reducers = {
    counter: counter,
    about: about,
    sideBar: sideBar
};

export default combineReducers(Object.assign(defaults, reducers));
