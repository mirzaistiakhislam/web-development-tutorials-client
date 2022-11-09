import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Thanks for accepting</h3>
            <p>Now, Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;