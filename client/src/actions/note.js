import axios from 'axios';
import { GET_NOTE, GET_NOTES, LIKE_COMMENT, LOAD_NOTES, UPDATE_COMMENT } from "./type";
import React from "react";

export const loadNotes = () => async dispatch => {
    try {
        const res = await axios.get('/api/note/all');
        dispatch({
            type: LOAD_NOTES,
            payload: res.data
        });
    } catch (err) {
        console.log(err.message);
    }
};

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

export const updateComment = ({ id, userId, content }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ content });
    try {
        const res = await axios.put(`/api/note/comment/${id}/${userId}`, body, config);
        dispatch({
            type: UPDATE_COMMENT,
            payload: res.data
        });
    } catch (err) {
        console.log(err.message);
    }
};

export const likeComment = ({ noteId, commentId, userId }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.put(`/api/note/comment/like/${noteId}/${commentId}/${userId}`, config);
        console.log(res.data);
        dispatch({
            type: LIKE_COMMENT,
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};

export const unlikeComment = ({ noteId, commentId, userId }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.put(`/api/note/comment/unlike/${noteId}/${commentId}/${userId}`, config);
        console.log(res.data);
        dispatch({
            type: LIKE_COMMENT,
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};