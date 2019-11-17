import { REGISTER_SUCCESS } from '../actions/type';

const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false,
                isAuthenticated: true
            };
        default:
            return state;
    }
}
