import React from "react";
import { Helmet } from "react-helmet-async";
import "./index.css";

function PageNotFound() {

    const PageNotFoundInstance = ({ ...props }) => {
        return (
            <div className="page-not-found-frame">
                <Helmet>
                    <title>404 Page Not Found</title>

                    <meta name="robots" content="noindex" />

                </Helmet>
                <h2>Sorry, we couldn't find the page you were looking for.</h2>
            </div>
        );
    };

    return (
        <PageNotFoundInstance />
    );

}

export default PageNotFound;