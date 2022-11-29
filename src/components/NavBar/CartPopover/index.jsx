import React, { useState, useEffect } from "react";
import { Button, Icon, Grid, Row, Divider, Panel, PanelGroup } from 'rsuite';
import CartPopoverItemPanel from "./CartPopoverItemPanel";
import { useNavigate } from 'react-router-dom'
import Axios from 'axios';
import "./index.css";

function CartPopover() {

  let cartItems = [];
  let totalNuminCart = 0, subtotal = 0, totalMinBagVal = 0, totalMaxBagVal = 0;
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

  // console.log(priceSubtotal, bagValue);

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
        }
      }
    });
    return () => { isMounted = false; }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("tamsramscart")) {
      setCart(JSON.parse(localStorage.getItem("tamsramscart")));
      if (Object.entries(cart).length > 0) { setEmpty(false); }
      else { setEmpty(true); }
    }
  }, [cartChanged]);

  useEffect(() => {
    if (bagValue > 6) { setCartOverMax(true); }
    else { setCartOverMax(false); }
  }, [bagValue]);

  useEffect(() => {
    let isMounted = true;
    let count = 0;
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
        // console.log("cartList: " + cartList);
      })
    }

    return () => { isMounted = false };
  }, [cartChanged]);

  if (isLoading && !isEmpty) {
    return <div>Loading...</div>;
  }
  else {
    for (const prod of cartList) {
      cartItems.push(prod.map((val) => {
        if (val.quantity < val.quantity_in_cart) {
          cart[val.id] = val.quantity;
          localStorage.setItem("tamsramscart", JSON.stringify(cart));
          window.dispatchEvent(new Event("storage"));
        }
        totalNuminCart += val.quantity_in_cart;
        subtotal += val.quantity_in_cart * val.price;
        // console.log(val.product_name, val.quantity_in_cart, val.min_bag_value, val.max_bag_value );
        totalMinBagVal += val.quantity_in_cart * val.min_bag_value;
        totalMaxBagVal += val.quantity_in_cart * val.max_bag_value;
        return (
          <Panel><CartPopoverItemPanel
            key={val.id} variation_id={val.id} imagePath={`images/${val.image_prefix}1.jpg`} name={val.product_name} price={val.price}
            productPath={`/product/${val.product_id}/${val.product_name.replace(/\s/g, '-').toLowerCase()}`} variation_cat={val.variation_category} variation_name={val.variation_name} in_stock={val.quantity}
            quantity_in_cart={val.quantity_in_cart} /></Panel>)
      }));
    }
    if (totalMinBagVal == 0 && boxSize != "plants_only") {setBoxSize("plants_only")}
    if (bagValue != totalMinBagVal && bagValue != totalMaxBagVal) {
      if (totalMinBagVal <= 6) { 
        if (totalMinBagVal <= 2) {setBoxSize("small")}
        else if(totalMinBagVal <= 5) {setBoxSize("medium")}
        else {setBoxSize("large")}
        setBagValue(totalMinBagVal); 
    }
    else { setBagValue(totalMaxBagVal); setBoxSize("large")}
    }
    // console.log("popover: min bag value: " + totalMinBagVal);
    // console.log("popover: max bag value: " + totalMaxBagVal);
    // console.log("popover: box size: " + boxSize);
  }



  const CartPopoverInstance = () => {
    return (

      <>
        {!isEmpty && (<div className="cart-popover">
          <Grid fluid>

            <div><h6 className="popover-cart-header">Shopping Cart ({totalNuminCart})</h6></div>

            <div className="divider"><Divider /></div>

            <Row><div className="popover-cart-all-items-frame"><PanelGroup>{cartItems}</PanelGroup></div></Row>


            <div className="divider"><Divider /></div>

            <div className="popover-subtotal-frame">
              <p className="popover-subtotal-header">Subtotal :</p>
              <p className="popover-subtotal-number">${subtotal.toFixed(2)}</p>
            </div>

            <div className="divider"><Divider /></div>

            <div className="popover-checkout-buttons-frame">
              <Button href="/cart" className="view-cart-button">
                <div className="popover-checkout-button-contents">
                  <p className="popover-checkout-button-text">View Cart ({totalNuminCart})</p>
                </div>
              </Button>
              <Button appearance="primary" disabled={cartOverMax} className="popover-checkout-button" onClick={() => { toShipping() }}>
                <div className="popover-checkout-button-contents">
                  <p className="popover-checkout-button-text">Check Out</p>
                  <Icon icon="shopping-cart" />
                </div>
              </Button>
            </div>
            {cartOverMax && (<div className="popover-cart-over-max-frame">
              <p className="popover-cart-over-max-header">Too many items in the cart.</p>
              {/* <p className="cart-over-max-text">The number of products in your cart
                currently exceeds the limit allowed for our largest box size. Unfortunately, we are unable to
                do bulk orders as it compromises the safety of the fish. Feel free to place an additional order if you want to buy more fish.</p> */}
            </div>)}
          </Grid>
        </div>)}

        {/* If the cart is empty, display "There are no items in your cart." */}
        {isEmpty && (<div className="EmptyCartPopover">

          <div><h6 className="popover-cart-header">Shopping Cart ({cartItems.length})</h6></div>

          <div className="divider"><Divider /></div>

          <div className="popover-cart-is-empty-frame">
            <p className="popover-cart-is-empty-header">There are no items in your cart.</p>
          </div>

        </div>)}
      </>
    );
  };

  return (
    <CartPopoverInstance />
  );
}

export default CartPopover;