import React from "react";
import BrowsePanel from '../../components/Panels/BrowsePanel'

function Browse() {

    const BrowseInstance = ({ ...props }) => {
        return (
            <BrowsePanel />
        );
    };

    return (
        <BrowseInstance />
    );

}

export default Browse;