import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CoursesCard = ({ course }) => {

    const { _id, title, image_url, details } = course;
    return (
        <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    {
                        details.length > 150 ?
                            <>{details.slice(0, 150) + '...'} <Link to={`/courses/${_id}`}>Read More</Link> </>
                            :
                            details
                    }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default CoursesCard;