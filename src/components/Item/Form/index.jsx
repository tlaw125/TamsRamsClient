import { Button, ButtonToolbar, InputNumber, Grid, Row, Col } from 'rsuite';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import "./index.css";

function Form(props) {

    let { id } = useParams();

    const [productVar, setProductVar] = useState([]);

    useEffect(() => {
        let isMounted = true;
        Axios.get("https://tams-rams.herokuapp.com/api/product-variations", {
            params:
            {
                productID: id
            }
        }).then((response) => {
            if (isMounted) {
                setProductVar(response.data);
            }
        })
        return () => { isMounted = false };
    }, []);

    const [curPrice, setCurPrice] = useState();
    const [curQuantity, setCurQuantity] = useState();
    const [activeButton, setActiveButton] = useState();
    const [inputValue, setInputValue] = useState(1);
    let variantLabel = "";

    if (productVar.length > 0) {
        if (!curPrice && !curQuantity) {
            setCurPrice(productVar[0].price);
            setCurQuantity(productVar[0].quantity);
            setActiveButton(productVar[0].id)
        }
        variantLabel = productVar[0].variation_category;
    }

    const handleVariantChange = (p, q, btn) => {
        setCurPrice(p);
        setCurQuantity(q);
        setActiveButton(btn);
        setInputValue(1);
    }

    const addToCart = () => {
        let cart = localStorage.getItem("tamsramscart") ? JSON.parse(localStorage.getItem("tamsramscart")) : {};

        cart[activeButton] = (cart[activeButton] ? cart[activeButton] : 0);

        let qty = cart[activeButton] + parseInt(inputValue);
        if (qty < curQuantity) {
            cart[activeButton] = qty;
        } else {
            cart[activeButton] = curQuantity;
        }

        localStorage.setItem("tamsramscart", JSON.stringify(cart));
        window.dispatchEvent(new Event("storage"));
    }

    let productOptions = [];
    let buttonWidth = `${(100 / productVar.length) - 2}%`;

    if (productVar.length > 0) {
        productOptions.push(productVar.map((val) => {
            return (
                <Button key={val.id} className={activeButton === val.id ? "form-grouping-active-button" : "form-grouping-button"} onClick={(e) => handleVariantChange(val.price, val.quantity, val.id)} style={{ width: { buttonWidth } }} >{val.variation_name}</Button>
            )
        }));
    }

    let reviewsLabel = "No Reviews Yet";
    if (props.numReviews) { reviewsLabel = `(${props.numReviews} Reviews)`; }

    const FormInstance = () => {
        return (
            <Grid fluid className="form">
                <Row className="form-product-name">
                    <h4 >{props.product_name}</h4>
                </Row>
                <div className="form-price-and-rating">
                    <p>${curPrice}</p>
                    <div className="form-rating"><div className="form-star">
                        <FontAwesomeIcon icon={faStar} color="blue" className="feedback-star" />&nbsp;
                    </div>
                        <p>{props.rating} {reviewsLabel}</p></div>
                </div>
                <Row className="form-grouping">
                    <b>{variantLabel}:</b>
                    <ButtonToolbar className="form-grouping-buttons">
                        {productOptions}
                    </ButtonToolbar>

                </Row>
                {curQuantity > 0 && <Row className="form-quantity-and-add">
                    <div className="quantity-and-add-frame">
                        <div className="form-quantity-frame">
                            <b>Quantity:</b>
                            <div className="form-quantity-input"><InputNumber value={inputValue} onChange={setInputValue} max={curQuantity} min={0} /></div>
                        </div>
                        <Button appearance="primary" size="sm" className="form-add-to-cart-button" onClick={() => addToCart()}>Add to Cart</Button>
                    </div>
                </Row>}

                {curQuantity < 1 &&
                    <div className="sold-out-frame">
                        <Row className="form-quantity-and-add">
                            <div className="quantity-and-add-frame">
                                <div className="form-quantity-frame">
                                    <b>Quantity:</b>
                                    <div className="form-quantity-input"><InputNumber value={0} disabled={true} onChange={setInputValue} max={curQuantity} min={0} /></div>
                                </div>
                                <Button appearance="primary" disabled={true} size="sm" className="form-add-to-cart-button">Add to Cart</Button>
                            </div>
                        </Row>
                        <p className="sold-out-text">This product is currently sold out.</p>
                    </div>}
            </Grid>
        );
    };

    return (
        <FormInstance />
    );
}

export default Form;