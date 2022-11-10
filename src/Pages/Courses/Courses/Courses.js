import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
import { FaFileDownload } from "react-icons/fa";

const Courses = () => {

    const courses = useLoaderData();
    const { title, details, image_url, category_id } = courses;
    const ref = React.createRef();

    return (
        <Card ref={ref}>
            <Card.Header as="h5" className='d-flex justify-content-between'>
                {title}
                <ReactToPdf targetRef={ref} filename='details.pdf'>
                    {
                        ({ toPdf }) => (
                            <FaFileDownload fontSize={30} onClick={toPdf}></FaFileDownload>
                        )
                    }
                </ReactToPdf>
            </Card.Header>

            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/courses/premium/${courses._id}`}>
                    <Button variant="dark">Get premium access</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Courses;