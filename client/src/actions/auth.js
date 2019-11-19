import axios from 'axios';
import { REGISTER_SUCCESS, CHECK_USER_EXIST, GET_USERS, LOAD_USER } from './type';
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

export const checkUserExist = (email) => async dispatch => {
    const res = await axios.get(`/api/user/checkUserExist/${email}`);
    dispatch({
        type: CHECK_USER_EXIST,
        payload: res.data
    });
};

export const getAllUser = () => async dispatch => {
    const res = await axios.get('/api/user/all');
    dispatch({
        type: GET_USERS,
        payload: res.data
    })
};

export const loadUser = () => async dispatch => {
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
};
