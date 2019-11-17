/**
 * Created by Kaizhi Du on 2019/11/14.
 */
import React, { Fragment, useState } from 'react';
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {

    const [ register, setRegister ] = useState(false);

    const registerSubmit = (values) => {
        console.log(values);
    };

    const loginSubmit = (values) => {
        console.log(values);
    };

    return (
        <Fragment>
            <Modal.Header closeButton>
                <Modal.Title>{register ? 'Register' : 'Login'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {register ?
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
}

export default connect(null, {})(Auth);