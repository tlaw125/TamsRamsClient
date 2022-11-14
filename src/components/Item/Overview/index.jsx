import { Container, Grid, Row, Col, Panel } from 'rsuite';
import React from "react";
import "./index.css";

function Overview(props) {

    const OverviewInstance = () => {
        return (
            <Container className="overview">
                <Panel bordered shaded>
                    <Grid fluid>
                        <Row className="overview-title">
                            <h4>Overview</h4>
                        </Row>
                        <Row className="overview-details">
                            <Row>
                                <Col xs={12}>Species:</Col>
                                <Col xs={12}>{props.sci_name} </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xs={12}>Family:</Col>
                                <Col xs={12}>{props.family}</Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xs={12}> Origin:</Col>
                                <Col xs={12}>{props.origin}</Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xs={12}>Avg Max Size:</Col>
                                <Col xs={12}>{props.avg_size}</Col>
                            </Row>
                            <hr />
                        </Row>
                        <Row className="water-parameters-title">
                            <h4>Water Parameters:</h4>
                        </Row>
                        <Row className="water-parameters-details">
                            <Row>
                                <Col xs={12}> Temperature: </Col>
                                <Col xs={12}>{props.temperature}</Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xs={12}>pH:</Col>
                                <Col xs={12}>{props.ph}</Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xs={12}>TDS:</Col>
                                <Col xs={12}>{props.tds}</Col>
                            </Row>
                            <hr />
                        </Row>
                    </Grid>
                </Panel>
            </Container>
        );
    };

    return (
        <OverviewInstance />
    );
}

export default Overview;