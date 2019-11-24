import axios from 'axios';
import { GET_NOTE, GET_NOTES } from "./type";

export const getNotes = () => async dispatch => {
    try {
        const res = await axios.get('/api/note/all');
        dispatch({
            type: GET_NOTES,
            payload: res.data
        });
    } catch (err) {
        console.log(err.message);
    }
};

export const getNote = (id) => async dispatch => {
    console.log(id);
    try {
        const res = await axios.get(`/api/note/${id}`);
        dispatch({
            type: GET_NOTE,
            payload: res.data
        });
    } catch (err) {
        console.log(err.message);
    }
};