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
              <ProductCard imagePath="images/celestial_light_ram1.jpg"
                name="Celestial Light Ram" price="19.99" productPath="/product/20/celestial-light-ram" />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <ProductCard imagePath="images/veiltail_electric_blue_ram1.jpg"
                name="Veiltail Electric Blue Ram" price="24.99" productPath="/product/3/veiltail-electric-blue-ram" />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <ProductCard imagePath="images/gold_electric_ram1.jpg"
                name="Gold Electric Ram" price="14.99" productPath="/product/24/gold-electric-ram" />
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