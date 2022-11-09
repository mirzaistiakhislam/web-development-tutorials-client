import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const PremiumCheckout = () => {

    const premiumDetails = useLoaderData();
    // console.log(premiumDetails);

    const { title, image_url, details } = premiumDetails;
    return (
        <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Text>
                    {details}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PremiumCheckout;