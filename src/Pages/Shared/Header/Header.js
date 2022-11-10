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
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.cjs';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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

        <div className='mb-4'>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/' style={{ textDecoration: 'none', color: '#ffffff', fontSize: 22, fontWeight: 'bold' }}><FaDev style={{ paddingBottom: '6px', fontSize: '30px' }} ></FaDev> Web Development Tutorials</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto pt-1">
                            <Link to='/' style={{ textDecoration: 'none', color: '#ffffff', fontSize: '20px', marginTop: '4px', marginLeft: '20px', padding: '2px 10px 0 10px' }} className='link'>Courses</Link>

                            <Link to='/FAQ' style={{ textDecoration: 'none', color: '#ffffff', fontSize: '20px', marginTop: '4px', marginLeft: '20px', padding: '2px 10px 0 10px' }} className='link' >FAQ</Link>

                            <Link to='/blogs' style={{ textDecoration: 'none', color: '#ffffff', fontSize: '20px', marginTop: '4px', marginLeft: '20px', padding: '2px 10px 0 10px' }}
                                className='link'>Blogs</Link>
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

                            {
                                user?.uid ?
                                    <div className='d-flex'>
                                        <span style={{ color: '#ffffff', marginRight: '20px', marginTop: '5px' }} >{user?.displayName}</span>

                                        {
                                            user?.photoURL ?

                                                <Tippy content={user.displayName}>
                                                    <Image
                                                        style={{
                                                            height: '30px', marginRight: '25px', marginTop: '4px',
                                                        }} roundedCircle
                                                        src={user?.photoURL}>
                                                    </Image>
                                                </Tippy>

                                                : <FaUser style={{ color: 'white', height: '30px', marginRight: '25px', marginTop: '4px' }}></FaUser>

                                        }

                                        <Button variant='light' onClick={handleLogOut}>
                                            Logout
                                        </Button>
                                    </div>
                                    :
                                    <>
                                        <Button variant='light' className='me-3 w-100'><Link to='/login' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Login</Link></Button>
                                        <Button variant='light' className='w-100'><Link to='/register' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Register</Link></Button>
                                    </>
                            }


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