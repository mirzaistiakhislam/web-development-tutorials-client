import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURLvalue;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email Address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter Your Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your PhotoURL</Form.Label>
                <Form.Control type="text" name="photoURL" placeholder="Enter PhotoURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter Your Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form.Group>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>

        </Form>
    );
};

export default Register;