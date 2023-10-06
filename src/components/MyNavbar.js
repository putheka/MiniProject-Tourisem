import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">&lt;JongDer/&gt;</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center">

                        <NavLink className={"nav-link"} to="/">
                            Home
                        </NavLink>
                        <NavLink className={"nav-link"} to="/service">
                            Service
                        </NavLink>
                        <NavLink className={"nav-link"} to="/products">
                            About Us
                        </NavLink>

                        <NavDropdown title="Best Places to Visit in Asia!" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.3">Siem Reap</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Maldives</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tokyo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Phuket</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Guilin and Lijiang River Nation Park</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="d-flex justify-content-center">
                        <button className='btn btn-secondary me-3 rounded-pill'>Sign Up</button>
                        <button className='btn btn-primary rounded-pill'>Login</button>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
