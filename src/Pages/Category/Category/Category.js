import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../../Shared/CoursesCard/CoursesCard';

const Category = () => {

    const categoryCourses = useLoaderData();
    // console.log(categoryCourses);

    return (
        <div>
            <h2>category: {categoryCourses.length}</h2>
            {
                categoryCourses.map(course => <CoursesCard
                    key={course._id}
                    course={course}
                ></CoursesCard>)
            }
        </div>
    );
};

export default Category;