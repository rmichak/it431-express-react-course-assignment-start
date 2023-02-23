//create a header component that will be used in the app
//this component will be used in the app.js file

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Courses</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/courses">
                            <Nav.Link >Courses</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;