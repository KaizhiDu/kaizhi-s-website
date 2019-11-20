/**
 * Created by Kaizhi Du on 2019/11/14.
 */
import React, { Fragment, useState } from 'react';
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
// inside import
import Register from "./Register";
import Login from "./Login";
import { register, login } from "../../actions/auth";


const Auth = ({ register, login, isAuthenticated, onClose }) => {

    const [ isRegister, setRegister ] = useState(false);

    const registerSubmit = (values) => {

        const { name, email, password } = values;
        register({ name, email, password });
    };

    const loginSubmit = (values) => {
        const { email, password } = values;
        login({ email, password });
    };

    if (isAuthenticated) {
        onClose();
    }

    return (
        <Fragment>
            <Modal.Header closeButton>
                <Modal.Title>{isRegister ? 'Register' : 'Login'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isRegister ?
                    (
                        <Register onSubmit={registerSubmit}/>
                    )
                    :
                    (
                        <Login onSubmit={loginSubmit}
                               onRegisterClick={() => setRegister(true)}/>
                    )
                }
            </Modal.Body>
        </Fragment>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, login })(Auth);