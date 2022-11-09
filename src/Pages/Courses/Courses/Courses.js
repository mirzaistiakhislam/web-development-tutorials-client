import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {

    const courses = useLoaderData();
    const { title, details, image_url, category_id } = courses;
    return (
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/courses/premium/${courses._id}`}>
                    <Button variant="primary">Go somewhere</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Courses;