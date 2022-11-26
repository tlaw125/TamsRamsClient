import React, { useState, useEffect } from "react";
import { Button, Icon, Row, Divider, Loader } from 'rsuite';
import { Link, useNavigate } from 'react-router-dom'
import CartContentsPanel from './CartContentsPanel';
import BreadCrumb from '../../BreadCrumb';
import Axios from 'axios';
import { Helmet } from "react-helmet-async";
import "./index.css";

function ShoppingCartPanel() {

    let pathname = window.location.pathname;
    let cartItems = [];
    let totalNuminCart = 0, subtotal = 0, totalMinBagVal = 0, totalMaxBagVal = 0;
    const verySmallWidth = 480;
    const [verySmallScreen, setVerySmallScreen] = useState(false);
    const [isEmpty, setEmpty] = useState(true);
    const [cart, setCart] = useState(localStorage.getItem("tamsramscart") ? JSON.parse(localStorage.getItem("tamsramscart")) : []);
    const [cartList, setCartList] = useState([]);
    const [cartChanged, setCartChanged] = useState(false);
    const [isLoading, setLoading] = useState(true);
    // const [priceSubtotal, setPriceSubtotal] = useState(0);
    const [bagValue, setBagValue] = useState(0);
    const [boxSize, setBoxSize] = useState('');
    const [cartOverMax, setCartOverMax] = useState(false);

    const navigate = useNavigate();

    const toShipping = () => {
        navigate('/shipping', { state: { boxSize: boxSize, cart: cartList } });
    }

    useEffect(() => {
        if (window.innerWidth < verySmallWidth) {
            setVerySmallScreen(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < verySmallWidth) {
                setVerySmallScreen(true);
            } else {
                setVerySmallScreen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        let isMounted = true;
        window.addEventListener('storage', () => {
            if (isMounted) {
                if (localStorage.getItem("tamsramscart")) {
                    if (cart != localStorage.getItem("tamsramscart")) {
                        setCartList([]);
                        setCartChanged(true);
                        setCart(JSON.parse(localStorage.getItem("tamsramscart")));
                    }
                    else {
                        setCartChanged(false);
                    }
                }
            }
        });
        return () => { isMounted = false; }
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            if (localStorage.getItem("tamsramscart")) {
                setCart(JSON.parse(localStorage.getItem("tamsramscart")));
                if (Object.entries(cart).length > 0) { setEmpty(false); }
                else { setEmpty(true); }
            }
        }
        return () => {
            isMounted = false;
        }
    }, [cartChanged]);

    useEffect(() => {
        if (bagValue > 6) { setCartOverMax(true); }
        else { setCartOverMax(false); }
    }, [bagValue]);

    useEffect(() => {
        let isMounted = true;
        let count = 0;
        // setCartList([]);
        // console.log(cartList);
        let tempCart = [];
        for (const [key, value] of Object.entries(cart)) {
            Axios.get("https://tams-rams.herokuapp.com/api/cart-info", {
                params:
                {
                    id: key
                }
            }).then((response) => {
                if (isMounted) {
                    let cartEntry = response.data;
                    cartEntry[0].quantity_in_cart = value;

                    if (cartEntry.length > 0) {
                        tempCart.push(cartEntry);
                        // setCartList(cartList);
                        count += 1;
                        if (count == Object.entries(cart).length) { setLoading(false); setCartChanged(false); setCartList(tempCart); }
                    }
                }
            })

        }
        return () => { isMounted = false };
    }, [cartChanged]);

    if (isLoading && !isEmpty) {
        return <div className="loader"><Loader size="md" /></div>;
    }
    else {
        // totalNuminCart = 0, totalMinBagVal = 0, totalMaxBagVal = 0;
        for (const prod of cartList) {
            console.log(cartList);
            cartItems.push(prod.map((val) => {
                if (val.quantity < val.quantity_in_cart) {
                    cart[val.id] = val.quantity;
                    localStorage.setItem("tamsramscart", JSON.stringify(cart));
                    window.dispatchEvent(new Event("storage"));
                }
                totalNuminCart += val.quantity_in_cart;
                subtotal += val.quantity_in_cart * val.price;
                console.log("subtotal: " + subtotal);
                console.log(val.product_name, val.quantity_in_cart, val.min_bag_value, val.max_bag_value);
                totalMinBagVal += val.quantity_in_cart * val.min_bag_value;
                totalMaxBagVal += val.quantity_in_cart * val.max_bag_value;
                return (
                    <CartContentsPanel
                        key={val.id} variation_id={val.id} imagePath={`images/${val.image_prefix}1.jpg`} name={val.product_name} price={val.price}
                        productPath={`/product/${val.product_id}/${val.product_name.replace(/\s/g, '-').toLowerCase()}`} variation_cat={val.variation_category} variation_name={val.variation_name} in_stock={val.quantity}
                        quantity_in_cart={val.quantity_in_cart} />)
            }));
        }
        if (totalMinBagVal == 0 && boxSize != "plants_only") { setBoxSize("plants_only") }
        if (bagValue != totalMinBagVal && bagValue != totalMaxBagVal) {
            if (totalMinBagVal <= 6) {
                if (totalMinBagVal <= 2) { setBoxSize("small") }
                else if (totalMinBagVal <= 5) { setBoxSize("medium") }
                else { setBoxSize("large") }
                setBagValue(totalMinBagVal);
            }
            else { setBagValue(totalMaxBagVal); setBoxSize("large") }
        }

        // if (totalMinBagVal <= 6) { bagValue = totalMinBagVal; }
        // else { bagValue = totalMaxBagVal; }
        console.log("bag value: " + bagValue);
        console.log("max bag value: " + totalMaxBagVal);
    }

    function CartPanelInstance() {
        return (
            <>
                <Helmet>
                    <title>Tam's Rams Shopping Cart</title>
                    <meta name="description" content="View the items you've added into your shopping cart." />
                    <meta property="og:type" content="website" />
                    <meta name="robots" content="noindex" />
                    <link rel="canonical" href={pathname} />
                </Helmet>
                {!isEmpty && (<div className="CartPage">

                    <Row>
                        <BreadCrumb page="Shopping Cart" />
                    </Row>

                    <Row><h2 className="cart-header">Shopping Cart ({totalNuminCart})</h2></Row>

                    <Row className="cart-category-header-section">
                        <h4 className="item-category-header">Item</h4>
                        <h4 className="quantity-category-header">Quantity</h4>
                        <h4 className="price-category-header">Price</h4>
                        {!verySmallScreen && <h4 className="total-category-header">Total</h4>}
                    </Row>

                    <Row><Divider /></Row>

                    <Row>{cartItems}</Row>


                    <div className="bottom-cart-page-frame">
                        <div className="subtotal-checkout-shipping-frame">
                            <div className="subtotal-frame">
                                <h4 className="subtotal-header">Subtotal :</h4>
                                <h4 className="subtotal-number">${subtotal.toFixed(2)}</h4>
                            </div>
                            <div className="shopping-checkout-frame">
                                {/* <div className="cont-shop-frame"> */}
                                <Button href="/browse/fish/all?sortby=product_name&orderby=asc" className="cont-shop-button">
                                    <div className="checkout-button-contents">
                                        <Icon icon="long-arrow-left" />
                                        <p className="continue-shopping-text">Continue Shopping</p>
                                    </div>
                                </Button>
                                {/* </div> */}
                                <Button appearance="primary" disabled={cartOverMax} className="checkout-button" onClick={() => { toShipping() }}>
                                    <div className="checkout-button-contents">
                                        <Icon icon="shopping-cart" className="checkout-button-icon" />
                                        <p className="checkout-button-text">Check Out</p>
                                    </div>

                                </Button>
                            </div>
                            {cartOverMax && (<div className="cart-over-max-frame">
                                <p className="cart-over-max-header">Too many items in the cart.</p>
                                <p className="cart-over-max-text">The number of products in your cart
                                    currently exceeds the limit allowed for our largest box size. Unfortunately, we are unable to
                                    do bulk orders because it would compromise the safety of the fish. Feel free to place an additional order if you want to buy more fish.</p>
                            </div>)}
                            <p className="ship-info-text">Shipping will be calculated at checkout</p>
                        </div>
                    </div>

                </div>)}

                {/* If the cart is empty, display "There are no items in your cart." */}
                {isEmpty && (<div className="EmptyCartPage">

                    <div>
                        <BreadCrumb page="Shopping Cart" />
                    </div>

                    <div><h2 className="cart-header">Shopping Cart</h2></div>

                    <div className="cart-is-empty-frame">
                        <p className="cart-is-empty-header">There are no items in your cart.</p>
                    </div>

                    <Link to="/browse/fish/all?sortby=product_name&orderby=asc">
                        <div className="continue-shopping-frame">
                            <Icon icon="long-arrow-left" />
                            <p className="continue-shopping-text">Continue Shopping</p>
                        </div>
                    </Link>

                </div>)}
            </>
        );
    }

    return (
        < CartPanelInstance />
    );

}

export default ShoppingCartPanel;