import {
    GET_NOTE,
    GET_NOTES,
    GET_NOTES_WITH_PAGE,
    LIKE_COMMENT,
    LOAD_NOTES,
    UNLIKE_COMMENT,
    UPDATE_COMMENT
} from "../actions/type";

const initialState = {
    notes: [],
    note: null,
    notesWithPage: [],
    loading: true,
    noteLoading: true,
    notesWithPageLoading: true,
    skip: 0,
    limit: 5,
    active: 1
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_NOTES_WITH_PAGE:
            return {
                ...state,
                notesWithPage: payload.data,
                skip: payload.skip,
                active: payload.active,
                notesWithPageLoading: false
            };
        case GET_NOTES:
            return {
                ...state,
                notes: payload,
                note: null,
                loading: false,
                noteLoading: true
            };
        case LOAD_NOTES:
            return {
                ...state,
                notes: payload,
                loading: false,
                noteLoading: false
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
