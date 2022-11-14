import { Container, FlexboxGrid, Grid, Row, Col } from 'rsuite';
import React from "react";
import ProductCard from '../../Cards/ProductCard';
import "./index.css";

function FeaturedRamsPanel() {

  const FeaturedRamsPanelInstance = ({ ...props }) => {
    return (
      <Container >
        <div className="title">
          <h2>Featured Rams</h2>
        </div>
        <Grid fluid>
          <Row>
            <Col xs={24} sm={24} md={8} lg={8} className="blackram">
              <ProductCard imagePath="images/black_ram1.jpg"
                name="Black Ram" price="34.99" productPath="/product/1/black-ram" />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <ProductCard imagePath="images/veiltail_electric_blue_ram1.jpg"
                name="Veiltail Electric Blue Ram" price="24.99" productPath="/product/3/veiltail-electric-blue-ram" />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <ProductCard imagePath="images/gold_ram1.jpg"
                name="Gold Ram" price="9.99" productPath="/product/2/gold-ram" />
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