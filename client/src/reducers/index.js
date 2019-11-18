import { combineReducers } from "redux";
import {reducer as reduxFormReducer} from 'redux-form';
import alert from './alert';
import auth from './auth';

export default combineReducers({
    form: reduxFormReducer,
    alert,
    auth
});