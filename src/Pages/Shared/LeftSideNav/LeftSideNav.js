import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://web-development-tutorials-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2>All Courses: (Just Click) </h2>
            {
                categories.map(category =>
                    <p key={category.id}>
                        <ButtonGroup style={{ width: '100%' }}>
                            <Button variant="dark" >
                                <Link style={{ textDecoration: 'none', color: '#ffffff' }} to={`/category/${category.id}`}>{category.name}</Link>
                            </Button>
                        </ButtonGroup>
                    </p>)
            }
        </div>
    );
};

export default LeftSideNav;