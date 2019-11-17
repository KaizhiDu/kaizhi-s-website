import React, { Fragment, useState } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";
// inside imports
import Auth from "../auth/Auth";


const Topbar = () => {

    const [ show, setShow ] = useState(false);

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
                        <Nav.Link href="#photo">Photo</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login" onClick={() => setShow(true)}>LogIn</Nav.Link>
                        <Nav.Link href="#logout">LogOut</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/*Pop up*/}
            <Modal show={show} onHide={() => setShow(false)}>
                <Auth/>
            </Modal>
        </Fragment>
    )
};


export default Topbar;