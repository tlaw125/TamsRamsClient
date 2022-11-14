import React from "react";
import { Button, Container } from 'rsuite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import "./index.css";

function ExploreCard(props) {

  const divStyle = {
    right: props.right
  }

  const ExploreCardInstance = () => {
    return (
      <Container className="explore-panel">
        <Link to={props.path}>
          <img src={props.imagePath} className="explorebuttonIMG"></img>
          <Container className="explore-card-frame" style={divStyle}>
            <h4 className="explore-card-header">{props.header}</h4>
            <Button appearance="primary" className="explore-button">
              <div className="explore-button-contents">
                <p>SHOP</p>
                <FontAwesomeIcon icon={faArrowRightLong} className="arrow-icon" />
              </div>
            </Button>
          </Container>
        </Link>
      </Container>
    );
  };

  return (
    <ExploreCardInstance />
  );
}

export default ExploreCard;