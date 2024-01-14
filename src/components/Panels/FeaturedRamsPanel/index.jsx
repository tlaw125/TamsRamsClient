import { Container, Grid, Row, Col } from 'rsuite';
import React from "react";
import ProductCard from '../../Cards/ProductCard';
import "./index.css";

function FeaturedRamsPanel() {

  const FeaturedRamsPanelInstance = ({ ...props }) => {
    return (
      <Container className="featured-rams-panel" >
        <div className="title">
          <h2>Featured Rams</h2>
        </div>
        <Grid fluid>
          <Row>
            <Col xs={24} sm={24} md={8} lg={8} className="blackram">
              <ProductCard imagePath="images/black_ram1.jpg"
                name="Black Ram" price="24.99" productPath="/product/1/black-ram" />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <ProductCard imagePath="images/celestial_dark_ram1.jpg"
                name="Celestial Dark Ram" price="24.99" productPath="/product/21/celestial-dark-ram" />
            </Col>
            <Col xs={24} sm={12} md={8}>
            <ProductCard imagePath="images/celestial_light_ram1.jpg"
                name="Celestial Light Ram" price="19.99" productPath="/product/20/celestial-light-ram" />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  };

  return (
    <FeaturedRamsPanelInstance />
  );
}

export default FeaturedRamsPanel;