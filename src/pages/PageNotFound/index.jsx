import React from "react";
import { Icon, Panel, PanelGroup } from "rsuite";
import "./index.css";

function PageNotFound() {

    const PageNotFoundInstance = ({ ...props }) => {
        return (
            <div className="page-not-found-frame">
                <h2>Sorry, we couldn't find the page you were looking for.</h2>
            </div>
        );
    };

    return (
        <PageNotFoundInstance />
    );

}

export default PageNotFound;