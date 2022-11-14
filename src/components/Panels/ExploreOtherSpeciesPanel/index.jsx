import { Container } from 'rsuite';
import React from "react";
import ExploreCard from '../../Cards/ExploreCard';
import "./index.css";

function ExploreOtherSpeciesPanel() {

  const ExploreOtherSpeciesInstance = ({ ...props }) => {
    return (
      <Container className="explore-other-species-frame">
        <h2 className="explore-title">Explore Other Species</h2>
        <div className="explore-cards-frame">
          <ExploreCard header="Angelfish" right="0" 
           path="/browse/fish/angelfish?sortby=product_name&orderby=asc"
            imagePath="images/browse-angelfish.jpg" />
          <ExploreCard header="Livebearers" 
           path="/browse/fish/livebearers?sortby=product_name&orderby=asc"
          imagePath="images/browse-livebearers.jpg" />
        </div>
      </Container>
    );
  };

  return (
    <ExploreOtherSpeciesInstance />
  );
}

export default ExploreOtherSpeciesPanel;