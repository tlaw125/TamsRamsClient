import { Container, Grid, Row } from 'rsuite';
import React from "react";
import "./index.css";

function Description(props) {

    const DescriptionInstance = () => {
        return (
            <Container className="description">
                <Grid fluid>
                    <Row className="desc-title">
                        <h4>Description:</h4>
                    </Row>
                    <Row className="desc-text">
                        <p>{props.product_description}</p>
                    </Row>
                </Grid>
            </Container>
        );
    };

    return (
        <DescriptionInstance />
    );
}

export default Description;