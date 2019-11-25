import React from 'react';

const FieldTextarea = ({ input, meta: { touched, error } }) => (
    <div>
        <div>
            <textarea className="form-control" {...input} placeholder="Please comment here" rows="7"
                      cols="100"
            ></textarea>
            {touched && ((error && <span className="text-danger">{error}</span>))}
        </div>
    </div>
);

export default FieldTextarea;