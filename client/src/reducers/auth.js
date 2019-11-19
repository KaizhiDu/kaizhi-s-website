import { REGISTER_SUCCESS, GET_USERS, LOAD_USER } from '../actions/type';

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
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                user: payload,
                loading: false,
                isAuthenticated: true
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
