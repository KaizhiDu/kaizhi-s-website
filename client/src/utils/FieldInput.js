import React, { Fragment } from "react";
import { FormControl } from "react-bootstrap";

const FieldInput = ({ input, type, placeholder, name, meta }) => {
    return (
        <Fragment>
            <FormControl
                type={type}
                name={name}
                placeholder={placeholder}
                value={input.value}
                onChange={input.onChange}/>
        <div className='text-danger'>
            {meta.touched && meta.error}
        </div>
        </Fragment>

    )
};

export default FieldInput;