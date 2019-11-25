/**
 * Created by Kaizhi Du on 2019/11/24.
 */
import React from 'react';
import { reduxForm, Field, reset } from "redux-form";
import FieldTextarea from "../../../utils/FieldTextarea";

const CreateComment = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field id="createCommentField" className="form-control" name="content" component={FieldTextarea}/>
            <div className="text-right">
                <button type="submit" style={{ "marginTop": "10px" }} className="btn btn-success">Submit</button>
            </div>
        </form>
    )
};

const validate = (values) => {
    const errors = {};
    if (!values.content) errors.content = 'Comment content is required';
    return errors;
};

const afterSubmit = (result, dispatch) =>
    dispatch(reset('CommentForm'));

export default reduxForm({
    validate,
    touchOnChange: true,
    form: 'CommentForm',
    onSubmitSuccess: afterSubmit,
})(CreateComment);