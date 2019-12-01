import axios from 'axios';
import { REGISTER_SUCCESS, CHECK_USER_EXIST, GET_USERS, LOAD_USER, LOGIN_SUCCESS, LOG_OUT } from './type';
import setAuthToken from "../utils/setAuthToken";

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, email, password });
    try {
        const res = await axios.post('/api/user', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        console.log(err.message);
    }
};

export const getAllUser = () => async dispatch => {
    const res = await axios.get('/api/user/all');
    dispatch({
        type: GET_USERS,
        payload: res.data
    })
};

export const loadUser = () => async dispatch => {
    const oauthUser = await axios.get('/auth/google_user');
    const googleUser = JSON.parse(JSON.stringify(oauthUser.data)).googleUser;
    if (googleUser){
        dispatch({
            type: LOAD_USER,
            payload: googleUser
        });
    }else {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            try {
                const res = await axios.get('/api/auth');
                dispatch({
                    type: LOAD_USER,
                    payload: res.data
                });
            } catch (err) {
                console.error(err.message);
            }
        }
    }
};

export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        // when you login success, you need to loadUser again
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors[0].msg);
        alert(errors[0].msg);
    }
};

export const logout = () => async dispatch => {
    await axios.get('/auth/logout');
    dispatch({
        type: LOG_OUT
    });
};
