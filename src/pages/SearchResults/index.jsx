import React, { useState, useEffect } from "react";
import { Row, Col } from 'rsuite';
import ProductCard from "../../components/Cards/ProductCard";
import { useSearchParams } from 'react-router-dom';
import Axios from 'axios';
import "./index.css";
import Delayed from "../../components/Delayed";

function SearchResultsPage() {

    const [searchList, setSearchList] = useState([]);

    const [searchParams] = useSearchParams();
    let searchQuery = searchParams.get("q");

    const queryArr = searchQuery.split(' ');
    let searchQueryFormatted = "";

    for (var q in queryArr) {
        searchQueryFormatted += "+" + queryArr[q] + "* ";
    }

    useEffect(() => {
        let isMounted = true;
        Axios.get("https://tams-rams.herokuapp.com/api/get-search-results", {
            params:
            {
                searchQuery: searchQueryFormatted
            }
        }).then((response) => {
            if (isMounted) setSearchList(response.data);
        })
        return () => { isMounted = false };
    }, [searchParams]);

    let cards = [];

    const errMessage = (<Delayed key="SRP" waitBeforeShow={500}><h4 className="no-products-header">Sorry,
        there are currently no products under this search :(</h4></Delayed>);

    if (searchList.length > 0) {
        cards.push(searchList.map((val) => {
            return (
                <Col key={val.id} xs={24} sm={12} md={8} lg={6}><ProductCard
                    imagePath={`images/${val.image_prefix}1.jpg`} name={val.product_name} price={val.price}
                    productPath={`/product/${val.id}/${val.product_name.replace(/\s/g, '-').toLowerCase()}`} />
                </Col>)
        }));
    }

    const SearchResultsPageInstance = ({ ...props }) => {
        return (
            <div className="SearchResultsPage">
                <div>

                    <Row className="search-row">{<h3 className="search-header">Search Results for "{searchQuery}"</h3>}</Row>

                    {searchList.length > 0 && (<>
                        <Row><div>{cards}</div></Row>
                    </>)}

                    {searchList.length == 0 && (<>
                        <div>{errMessage}</div>
                    </>)}

                </div>
            </div>
        );
    };

    return (
        <SearchResultsPageInstance />
    );

}

export default SearchResultsPage;