import {combineReducers} from 'redux';
import LogInReducer from './LogInReducer';

const rootReducer = combineReducers({
    loginData: LogInReducer,
})

export default rootReducer;