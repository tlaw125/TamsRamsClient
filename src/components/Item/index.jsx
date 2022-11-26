import React, { useState, useEffect } from "react";
import { Grid, Row, Col, Loader } from 'rsuite';
import Description from './Description'
import Gallery from './Gallery'
import Form from './Form'
import Overview from './Overview'
import Feedback from './Feedback'
import Delayed from "../Delayed";
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Helmet } from "react-helmet-async";
import "./index.css";

function Item() {
    let pathname = window.location.pathname;
    const midwidth = 995;
    const minwidth = 708;
    const [mobileScreen, setMobileScreen] = useState(false);
    const [smallerScreen, setSmallerScreen] = useState(false);
    const [isLoading, setLoading] = useState(true);

    let { id, product_name } = useParams();
    let productName = product_name.replace(/-/g, ' ');

    const [productInfo, setProductInfo] = useState([]);

    useEffect(() => {
        let isMounted = true;
        Axios.get("https://tams-rams.herokuapp.com/api/product-info", {
            params:
            {
                productID: id,
                productName: productName
            }
        }).then((response) => {
            if (isMounted) {
                setProductInfo(response.data);
                setLoading(false);
            }
        })
        return () => { isMounted = false };
    }, []);

    // console.log(productInfo);

    useEffect(() => {
        if (window.innerWidth < minwidth) {
            setMobileScreen(true);
            setSmallerScreen(false);
        }
        else if (window.innerWidth < midwidth) {
            setMobileScreen(false);
            setSmallerScreen(true);
        }
        else {
            setMobileScreen(false);
            setSmallerScreen(false);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < minwidth) {
                setMobileScreen(true);
                setSmallerScreen(false);
            }
            else if (window.innerWidth < midwidth) {
                setMobileScreen(false);
                setSmallerScreen(true);
            }
            else {
                setMobileScreen(false);
                setSmallerScreen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const ItemInstance = () => {
        return (
            <>
                {isLoading && <div className="page_loader"><Loader size="lg" /></div>}
                {!isLoading && productInfo.map((val) => {
                    return (
                        <div key={val.id}>
                            <Helmet>
                                <title>{val.product_name}</title>
                                <meta name="description" content={`${val.product_description.substring(0, 167)}...`} />
                                <meta property="og:type" content="website" />
                                <meta property="og:title" content={`Tam's Rams - ${val.product_name}`} />
                                <meta property="og:description" content={`${val.product_description.substring(0, 167)}...`} />
                                <meta property="og:image" content={`images/${val.image_prefix}1.jpg`} />
                                <meta
                                    property="og:url"
                                    content={"https://www.tamsrams.com" + pathname}
                                />
                                <link rel="canonical" href={pathname} />
                            </Helmet>
                            {!mobileScreen && !smallerScreen &&
                                <Grid fluid>
                                    <Row>
                                        <Col xs={14}>
                                            <Gallery image_prefix={val.image_prefix} />
                                        </Col>
                                        <Col xs={10}>
                                            <div className="product-details-frame">
                                                <Row>
                                                    <Form product_name={val.product_name} rating={val.avg_rating} numReviews={val.num_of_reviews} />
                                                </Row>
                                                <Row>
                                                    <Overview sci_name={val.sci_name} family={val.family} origin={val.origin}
                                                        avg_size={val.avg_size} temperature={val.temperature}
                                                        ph={val.ph} tds={val.tds} />
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Description product_description={val.product_description} />
                                                </Row>
                                            </div>

                                        </Col>
                                    </Row>
                                    <hr />
                                    <Feedback rating={val.avg_rating} numReviews={val.num_of_reviews} />
                                </Grid>
                            }
                            {smallerScreen &&
                                <div className="mobile-product-page-frame">
                                    <Gallery image_prefix={val.image_prefix} />
                                    <div className="mobile-form-overview-frame">
                                        <div className="form-frame"><Form product_name={val.product_name} rating={val.avg_rating} numReviews={val.num_of_reviews} /></div>
                                        <div className="overview-frame"><Overview sci_name={val.sci_name} family={val.family} origin={val.origin}
                                            avg_size={val.avg_size} temperature={val.temperature}
                                            ph={val.ph} tds={val.tds} /></div>
                                    </div>
                                    <div className="description-frame"><Description product_description={val.product_description} /></div>
                                    <div className="feedback-frame"><Feedback rating={val.avg_rating} numReviews={val.num_of_reviews} /></div>
                                </div>}

                            {mobileScreen &&
                                <div className="mobile-product-page-frame">
                                    <Gallery image_prefix={val.image_prefix} />
                                    <div className="form-frame"><Form product_name={val.product_name} rating={val.avg_rating} numReviews={val.num_of_reviews} /></div>
                                    <div className="overview-frame"><Overview sci_name={val.sci_name} family={val.family} origin={val.origin}
                                        avg_size={val.avg_size} temperature={val.temperature}
                                        ph={val.ph} tds={val.tds} /></div>
                                    <div className="description-frame"><Description product_description={val.product_description} /></div>
                                    <div className="feedback-frame"><Feedback rating={val.avg_rating} numReviews={val.num_of_reviews} /></div>
                                </div>}
                        </div>
                    )
                })}

                {/* If they enter an incorrect product URL */}
                {productInfo.length < 1 &&
                    <Delayed waitBeforeShow={30000}><h3 className="product-error-message">Sorry, we couldn't find the product you were looking for :(</h3></Delayed>
                }

            </>
        );
    };

    return (
        <ItemInstance />
    );

}

export default Item;