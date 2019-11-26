import { GET_NOTE, GET_NOTES, LIKE_COMMENT, UNLIKE_COMMENT, UPDATE_COMMENT } from "../actions/type";

const initialState = {
    notes: [],
    note: null,
    loading: true,
    noteLoading: true
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_NOTES:
            return {
                ...state,
                notes: payload,
                note: null,
                loading: false,
                noteLoading: true
            };
        case LIKE_COMMENT:
        case UNLIKE_COMMENT:
        case UPDATE_COMMENT:
        case GET_NOTE:
            return {
                ...state,
                note: payload,
                noteLoading: false,
                loading: true
            };
        default:
            return state;
    }
}
