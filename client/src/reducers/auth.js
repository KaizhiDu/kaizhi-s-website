import { REGISTER_SUCCESS, GET_USERS, LOAD_USER, LOGIN_SUCCESS, LOG_OUT } from '../actions/type';

const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                user: payload,
                loading: false,
                isAuthenticated: true
            };
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        case GET_USERS:
            return {
                ...state,
                users: payload
            };
        default:
            return state;
    }
}
