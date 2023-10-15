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
                        <NavLink className={"nav-link"} to="#">
                            Service
                        </NavLink>
                        <NavLink className={"nav-link"} to="/products">
                            About Us
                        </NavLink>

                        <NavDropdown title="Best Places to Visit in Asia!" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Maldiv">Maldives</NavDropdown.Item>
                            <NavDropdown.Item href="/Toyko">Tokyo</NavDropdown.Item>
                            <NavDropdown.Item href="/Phuket">Phuket</NavDropdown.Item>
                            <NavDropdown.Item href="/Siemreap">Siem Reap</NavDropdown.Item>
                            <NavDropdown.Item href="/Beijing">Beijing</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                     <div className="d-flex justify-content-center">
                        <NavLink to="/sign-up" className='btn btn-secondary me-3 '>Sign Up</NavLink>
                        <NavLink to="/sign-up" className='btn btn-primary '>Login</NavLink>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
