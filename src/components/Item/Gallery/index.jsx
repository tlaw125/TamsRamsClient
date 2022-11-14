import { Grid, Row, Col } from 'rsuite';
import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import Image from "./Image"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./index.css";

function Gallery(props) {

    const minWidth = 995;
    const [mobileScreen, setMobileScreen] = useState(false);

    useEffect(() => {
        if (window.innerWidth < minWidth) {
            setMobileScreen(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < minWidth) {
                setMobileScreen(true);
            } else {
                setMobileScreen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const GalleryInstance = () => {
        return (<>
            {!mobileScreen &&
                <Grid fluid className="gallery">
                    <Row className="gallery-row">
                        <Image imagePath={`images/${props.image_prefix}1.jpg`}/>
                    </Row>
                    <Row className="gallery-row">
                        <Col xs={12}>
                            <Image imagePath={`images/${props.image_prefix}2.jpg`} />
                        </Col>
                        <Col xs={12}>
                            <Image imagePath={`images/${props.image_prefix}3.jpg`} />
                        </Col>
                    </Row>
                    <Row className="gallery-row">
                        <Image imagePath={`images/${props.image_prefix}4.jpg`}/>
                    </Row>
                    <Row className="gallery-row">
                        <Col xs={12}>
                            <Image imagePath={`images/${props.image_prefix}5.jpg`} />
                        </Col>
                        <Col xs={12}>
                            <Image imagePath={`images/${props.image_prefix}6.jpg`} />
                        </Col>
                    </Row>
                    <Row className="gallery-row">
                        <Image imagePath={`images/${props.image_prefix}7.jpg`}/>
                    </Row>
                    <Row className="gallery-row">
                        <Image imagePath={`images/${props.image_prefix}8.jpg`}/>
                    </Row>
                </Grid>
            }

            {mobileScreen &&
                <div className='image-carousel'>
                    <Carousel >
                        <div>
                            <img src={`images/${props.image_prefix}1.jpg`} className="img-in-carousel" />
                        </div>
                        <div>
                            <img src={`images/${props.image_prefix}2.jpg`} className="img-in-carousel" />
                        </div>
                        <div>
                            <img src={`images/${props.image_prefix}3.jpg`} className="img-in-carousel" />
                        </div>
                        <div>
                            <img src={`images/${props.image_prefix}4.jpg`} className="img-in-carousel" />
                        </div>
                        <div>
                            <img src={`images/${props.image_prefix}5.jpg`} className="img-in-carousel" />
                        </div>
                        <div>
                            <img src={`images/${props.image_prefix}6.jpg`} className="img-in-carousel" />
                        </div>
                        <div>
                            <img src={`images/${props.image_prefix}7.jpg`} className="img-in-carousel" />
                        </div>
                        <div>
                            <img src={`images/${props.image_prefix}8.jpg`} className="img-in-carousel" />
                        </div>
                    </Carousel>
                </div>}
        </>

        );
    };

    return (
        <GalleryInstance />
    );
}

export default Gallery;