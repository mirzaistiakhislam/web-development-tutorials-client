import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaDev, FaUser, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Header.css';


const Header = () => {

    const [toggle, setToggle] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/' style={{ textDecoration: 'none', color: '#ffffff', fontSize: 22, fontWeight: 'bold' }}><FaDev style={{ paddingBottom: '6px', fontSize: '30px' }} ></FaDev> Web Development Tutorials</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto pt-1">
                            <Nav.Link href="#features">Courses</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Button onClick={handleToggle} variant="dark" className='px-5'>
                                {
                                    toggle
                                        ?
                                        <FaToggleOff fontSize={30}></FaToggleOff>
                                        :
                                        <FaToggleOn fontSize={30} ></FaToggleOn>
                                }
                            </Button>

                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span style={{ color: '#ffffff', marginRight: '20px', marginTop: '5px' }} >{user?.displayName}</span>

                                            {
                                                user?.photoURL ?
                                                    <Image
                                                        style={{ height: '30px', marginRight: '25px', marginTop: '4px' }} roundedCircle
                                                        src={user?.photoURL}>
                                                    </Image>
                                                    : <FaUser style={{ color: 'white', height: '30px', marginRight: '25px', marginTop: '4px' }}></FaUser>

                                            }

                                            <Button variant='light' onClick={handleLogOut}>
                                                Logout
                                            </Button>
                                        </>
                                        :
                                        <>
                                            <Button variant='light' className='me-3'><Link to='/login' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Login</Link></Button>
                                            <Button variant='light'><Link to='/register' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Register</Link></Button>
                                        </>
                                }


                            </>

                        </Nav>

                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;