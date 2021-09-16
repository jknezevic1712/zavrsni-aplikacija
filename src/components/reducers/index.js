import counterReducer from './counter';
// Redux components
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
});

export default allReducers;