import { ButtonToolbar, Dropdown } from 'rsuite';
import React from "react";
import "./index.css";

function Explore() {

  const ExploreInstance = ({ ...props }) => {
    return (
      <ButtonToolbar>
          <Dropdown title="Browse" appearance="default" trigger="hover">
              <Dropdown.Menu title="Freshwater" className='freshwater'>
                <Dropdown.Item placement="right">All</Dropdown.Item>
                <Dropdown.Item >Fish</Dropdown.Item>
                <Dropdown.Item >Invertebrates</Dropdown.Item>
                <Dropdown.Item >Plants</Dropdown.Item>
              </Dropdown.Menu>
              <Dropdown.Menu title="Saltwater" className='saltwater'>
                <Dropdown.Item placement="right">All</Dropdown.Item>
                <Dropdown.Item >Fish</Dropdown.Item>
                <Dropdown.Item >Invertebrates</Dropdown.Item>
                <Dropdown.Item >Corals</Dropdown.Item>
              </Dropdown.Menu>
              <Dropdown.Item >Equipment</Dropdown.Item>
          </Dropdown>
          </ButtonToolbar>
    );
  };

  return (
    <ExploreInstance appearance="default" />
  );
}

export default Browse;