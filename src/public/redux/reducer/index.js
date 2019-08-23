import { combineReducers } from 'redux';

import user from './user'
import score from './score'
import pattern from './pattern'
import button from './button'

const appReducer = combineReducers({
    user,
    score,
    pattern,
    button
});

export default appReducer;