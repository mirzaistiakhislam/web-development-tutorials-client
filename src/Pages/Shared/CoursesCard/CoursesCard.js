import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CoursesCard = ({ course }) => {

    const { _id, title, image_url, details } = course;
    return (
        <Card className='mb-5'>
            <Card.Header className='text-center'>{title}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 150 ?
                            <>{details.slice(0, 150) + '...'} <Link to={`/courses/${_id}`}>Read More</Link></>
                            :
                            details
                    }
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default CoursesCard;