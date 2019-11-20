import React, { Fragment, useState } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// inside imports
import Auth from "../auth/Auth";
import store from "../../store";
import { loadUser } from "../../actions/auth";
import { logout } from "../../actions/auth";

const Topbar = ({ isAuthenticated, isLoading, logout, user }) => {

    const [ show, setShow ] = useState(false);

    const handleClose = () => {
        setShow(false);
        store.dispatch(loadUser());
    };

    return (
        <Fragment>
            {/*Top navbar*/}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">KAIZHI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#profile">Profile</Nav.Link>
                        <Nav.Link href="#note">Note</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="#photo">Photo</Nav.Link>
                    </Nav>
                    <Nav>
                        {isAuthenticated && (isLoading === false) && (
                            <Nav.Link className='showName' href="#user">welcome {user.name} !</Nav.Link>)}
                        {
                            isAuthenticated ?
                                (
                                    <Nav.Link href="#logout" onClick={logout}>LogOut</Nav.Link>
                                )
                                :
                                (<Nav.Link href="#login" onClick={() => setShow(true)}>LogIn</Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/*Pop up*/}
            <Modal show={show} onHide={() => setShow(false)}>
                <Auth onClose={handleClose}/>
            </Modal>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.loading,
    user: state.auth.user
});

export default connect(mapStateToProps, { logout })(Topbar);