import { SET_ALERT, REMOVE_ALERT } from "../actions/type";

const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return {
                ...state,
                errors: payload
            };
        case REMOVE_ALERT:
            // return state.filter(alert => alert.id !== payload);
            return state;
        default:
            return state;
    }
}