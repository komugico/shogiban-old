import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class HeaderModule extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Shogiban</Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Tools">
                    <LinkContainer to="/tools/board">
                        <NavDropdown.Item>Board</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
            </Navbar>
        );
    }
}

export default HeaderModule;