import React, {Component} from 'react';
import {Nav, Navbar, Container} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant='dark' collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="/">proshop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/cart"><i className={'fas fa-shopping-cart'}/> Cart</Nav.Link>
                                <Nav.Link href="/login"><i className={'fas fa-user'}/> Sign In</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default Header;