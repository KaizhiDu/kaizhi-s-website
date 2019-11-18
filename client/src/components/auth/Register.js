/**
 * Created by Kaizhi Du on 2019/11/13.
 */
import React, { Fragment, useEffect } from 'react';
import { Button, Col, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import FieldInput from "../../utils/FieldInput";
import { getAllUser } from '../../actions/auth';
import { connect } from 'react-redux';
import store from '../../store';

const emailRg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let allUsers = [];

const Register = ({ handleSubmit, users }) => {
    if (users) {
        users.map(user => {
            allUsers.push(user.email);
        });
    }

    useEffect(() => {
        store.dispatch(getAllUser());
    }, []);

    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Field name="name" type="text" placeholder="User name" component={FieldInput} autocomplete="off"/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Field type="email" name="email" placeholder="Enter email" component={FieldInput}
                           autocomplete="off"/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Field type="password" name="password" placeholder="Password" component={FieldInput}
                           autocomplete="off"/>
                </Form.Group>
                <Form.Group controlId="password2">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Field type="password" name="password2" placeholder="Please type your password again"
                           component={FieldInput} autocomplete="off"/>
                </Form.Group>
                <Col className="text-right">
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Col>
            </Form>
        </Fragment>
    );
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values) => {
    return sleep(1000).then(() => {
        if (allUsers.includes(values.email)) {
            throw { email: 'That email is taken' }
        }
    });
};

const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'User\'s name is required';
    if (emailRg.test(values.email) === false) {
        errors.email = 'This Email is invalid';
    }
    if (!values.password) errors.password = 'Password is required';
    if (values.password !== values.password2) errors.password2 = 'Two password inputs must be consistent';
    return errors;
};

const mapStateToProps = (state) => ({
    users: state.auth.users
});

export default connect(mapStateToProps, { getAllUser })(reduxForm({
    validate,
    asyncValidate,
    touchOnChange: true,
    asyncChangeFields: [ 'email' ],
    form: 'RegisterForm'
})(Register))