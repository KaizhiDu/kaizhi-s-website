import { combineReducers } from "redux";
import {reducer as reduxFormReducer} from 'redux-form';
import alert from './alert';
import auth from './auth';
import note from './note';

export default combineReducers({
    form: reduxFormReducer,
    alert,
    auth,
    note
});