import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>404 error!</h1>
            <p>This page can't found</p>
        </div>
    );
};

export default ErrorPage;