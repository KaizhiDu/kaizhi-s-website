/**
 * Created by Kaizhi Du on 2019/11/13.
 */
import React, {  Fragment } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
// inside import
import FieldInput from "../../utils/FieldInput";

const emailRg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = ({ onRegisterClick, handleSubmit }) => {

    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Field type="email" name="email" placeholder="Enter email" component={FieldInput}/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Field type="password" name="password" placeholder="Password" component={FieldInput}/>
                </Form.Group>
                <Form.Group className='text-center' controlId="formBasicCheckbox">
                    <i className="fab fa-google"> Login with Google</i>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Text className="text-muted">
                            Do not have an account? <a href='#register' onClick={onRegisterClick}>click
                            here</a>
                        </Form.Text>
                    </Col>
                    <Col className="text-right">
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Fragment>
    )
};

const validate = (values) => {
    const errors = {};
    if (emailRg.test(values.email) === false) {
        errors.email = 'This Email is invalid';
    }
    if (!values.password) {
        errors.password = "password can not be empty";
    }
    return errors;
};

export default reduxForm({
    validate,
    touchOnChange: true,
    form: 'LoginForm'
})(Login);