import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const [user, setUser] = useState({})

    const { googleProviderLogin, githubProviderLogin, signIn, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email Address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter Your Email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter Your Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form.Group>
            <Form.Text className="text-danger">
                {error}
            </Form.Text> <br />
            <p>Don't have an account? Create account now <Link to='/register'>Register here</Link></p>
            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mt-2'> <FaGoogle></FaGoogle> Login with Google</Button>

            <Button onClick={handleGithubSignIn} variant="outline-primary" className='mt-2'> <FaGithub></FaGithub> Login with Github</Button>
        </Form>
    );
};

export default Login;