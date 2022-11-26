import React, { useState, useEffect } from "react";
import { Grid, Row, Col, Loader } from 'rsuite';
import ProductCard from '../../Cards/ProductCard';
import BreadCrumb from '../../BreadCrumb';
import ShowSortBy from '../../ShowSortBy';
import Pages from '../../Pagination';
import { useParams, useSearchParams } from 'react-router-dom';
import Axios from 'axios';
import "./index.css";
import Delayed from "../../Delayed";
import { Helmet } from "react-helmet-async";

function Browse() {

    let pathname = window.location.pathname;
    let { category, subcategory } = useParams();
    const [browseList, setBrowseList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [searchParams] = useSearchParams();
    let sortby = searchParams.get("sortby");
    let orderby = searchParams.get("orderby");

    useEffect(() => {
        let isMounted = true;
        Axios.get("https://tams-rams.herokuapp.com/api/browse-info", {
            params:
            {
                category: category,
                subcategory: subcategory,
                sortby: sortby,
                orderby: orderby
            }
        }).then((response) => {
            if (isMounted){
                setBrowseList(response.data);
                setLoading(false);
            }
        })
        return () => { isMounted = false };
    }, []);

    let cards = [];

    const errMessage = (<Delayed key="BP" waitBeforeShow={30000}><h4 className="no-products-header">Sorry,
        there are currently no products available for this
        category :(</h4></Delayed>);

    if (browseList.length > 0) {
        cards.push(browseList.map((val) => {
            return (
                <Col key={val.id} xs={24} sm={12} md={8} lg={6}><ProductCard
                    imagePath={`images/${val.image_prefix}1.jpg`} name={val.product_name} price={val.price}
                    productPath={`/product/${val.id}/${val.product_name.replace(/\s/g, '-').toLowerCase()}`} />
                </Col>)
        }));
    }

    const subStr = subcategory;
    const catStr = category;
    let browseHeader = "";
    let prevPage = "";
    let prevPageLink = "";
    if (subStr == "all") {
        browseHeader = "All " + catStr.charAt(0).toUpperCase() + catStr.slice(1);
    }
    else {
        browseHeader = subStr.charAt(0).toUpperCase() + subStr.slice(1);
        prevPage = catStr.charAt(0).toUpperCase() + catStr.slice(1);
        prevPageLink = `/browse/${category}/all?sortby=product_name&orderby=asc`;
    }


    const BrowseInstance = ({ ...props }) => {
        return (
            <div className="BrowsePage">
                <Helmet>
                    <title>Browse {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}</title>
                    <meta name="description" content="From rams ranging in colors of black, gold, electric blue, and everything in between. To other fish like guppies, platies, and ricefish. See what catches your eye!" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Tam's Rams - Browse" />
                    <meta property="og:description" content="From ram cichlids ranging in colors of black, gold, electric blue , and everything in between. To other species of fish like guppies, platies, and ricefish. See what catches your eye!" />
                    <meta property="og:image" content="https://lh3.googleusercontent.com/tjTuVWllfm44_xebwQjBrPhJxmlWKMl25U3tz5KDGQ-9jJ7YEBpsrHFlhXMruNJiRN1LOBpS4wzO7rNCCkZaArKa5pCtbHMRwjFjAHUS3qDTmWUmb3SRy8M_dd8GzNXeT2Z6NFOs=w2400" />
                    <meta
                        property="og:url"
                        content={"https://www.tamsrams.com"+pathname+"?sortby="+sortby+"&orderby="+orderby}
                    />
                    <link rel="canonical" href={pathname} />
                </Helmet>
                {isLoading && <div className="page_loader"><Loader size="lg" /></div>}
                {!isLoading && <div>

                    <Row>
                        <BreadCrumb prevPage={prevPage} prevPageLink={prevPageLink} page={browseHeader} />
                    </Row>

                    <Row className="browse-row">{<h2 className="browse-header">{browseHeader}</h2>}</Row>

                    {browseList.length > 0 && (<>
                        <Row className="browse-row"><ShowSortBy /></Row>
                        <Row><div>{cards}</div></Row>
                    </>)}

                    {browseList.length == 0 && (<>
                        <div>{errMessage}</div>
                    </>)}

                    {/* <Row><Pages /></Row> */}

                </div>}
            </div>
        );
    };

    return (
        <BrowseInstance />
    );

}

export default Browse;