import React, { useEffect, useState } from 'react';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2>All Category: {categories.length}</h2>
        </div>
    );
};

export default LeftSideNav;