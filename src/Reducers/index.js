import { combineReducers } from 'redux'

import counter from 'reducers/counter'
import about from 'reducers/about'


const defaults = {}

const reducers = {
    counter: counter,
    about: about
}

export default combineReducers(Object.assign(defaults, reducers))
