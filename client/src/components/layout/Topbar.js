import React, { Fragment, useState } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// inside imports
import Auth from "../auth/Auth";
import store from "../../store";
import { loadUser } from "../../actions/auth";
import { logout } from "../../actions/auth";
import me from "../../img/me.jpg";

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
                <Navbar.Brand href="/">KAIZHI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/profile">
                            Profile
                        </Link>
                        <Link className="nav-link" to="/note">
                            Note
                        </Link>
                        <Link className="nav-link" to="/project">
                            Project
                        </Link>
                        <Link className="nav-link" to="/photo">
                            Photo
                        </Link>
                    </Nav>
                    <Nav>
                        {isAuthenticated && (isLoading === false) && (

                            <Nav.Link className='showName'>
                                <img style={{"marginRight":"7px"}} src={user.avatar} width="20px" height='20px'/>
                                {user.name}
                            </Nav.Link>)}
                        {
                            isAuthenticated ?
                                (
                                    <Nav.Link href="#logout" onClick={logout}>LogOut</Nav.Link>
                                )
                                :
                                (
                                    <Nav.Link href="#login" onClick={() => setShow(true)}>LogIn</Nav.Link>
                                )
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