import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form.Group>
            <Form.Text className="text-danger">
                We'll never share your email with anyone else.
            </Form.Text> <br />

            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mt-2'> <FaGoogle></FaGoogle> Login with Google</Button>

            <Button variant="outline-primary" className='mt-2'> <FaGithub></FaGithub> Login with Github</Button>
        </Form>
    );
};

export default Login;