import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../Shared/CoursesCard/CoursesCard';

const Home = () => {

    const courses = useLoaderData();
    return (
        <div>

            {
                courses.map(course => <CoursesCard
                    key={course._id}
                    course={course}
                ></CoursesCard>)
            }
        </div>
    );
};

export default Home;