import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Button, Divider, Icon, InputNumber } from 'rsuite';
import "./index.css";

function CartContentsPanel(props) {

  const minWidth = 820;
  const verySmallWidth = 480;
  let item_total = (props.price) * (props.quantity_in_cart);
  const [value, setValue] = useState(props.quantity_in_cart);
  const [disable_minus, setDisableMinus] = useState(false);
  const [disable_plus, setDisablePlus] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [verySmallScreen, setVerySmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < minWidth) {
      setMobileScreen(true);
    }
    if (window.innerWidth < verySmallWidth) {
      setVerySmallScreen(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < minWidth) {
        setMobileScreen(true);
      } else {
        setMobileScreen(false);
      }
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

  const handleMinus = () => {
    if (value > 0) {
      setValue(parseInt(value, 10) - 1);
      setDisablePlus(false);
    }
  };
  const handlePlus = () => {
    if (value < props.in_stock) {
      setValue(parseInt(value, 10) + 1);
      setDisableMinus(false);
    }
  };

  const handleInputChange = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setValue(parseInt(event.target.value, 10));
    }

  };

  const removeFromCart = (prod) => {
    let cart = JSON.parse(localStorage.getItem("tamsramscart"));
    delete cart[prod];
    localStorage.setItem("tamsramscart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (value != props.quantity_in_cart) {
        let cart = localStorage.getItem("tamsramscart") ? JSON.parse(localStorage.getItem("tamsramscart")) : {};
        if (value <= props.in_stock) {
          cart[props.variation_id] = parseInt(value, 10);
          localStorage.setItem("tamsramscart", JSON.stringify(cart));
          window.dispatchEvent(new Event("storage"));
        }
        else {
          setValue(props.in_stock);
        }
      }
      if (value == (props.in_stock)) {
        setDisablePlus(true);
      }
      if (value == 0) {
        setDisableMinus(true);
        removeFromCart(props.variation_id);
      }
    }
    return () => {
      isMounted = false;
    }
  }, [value]);

  const CartContentsPanelInstance = () => {
    return (
      <>
        {/* If the screen is > minWidth, Quantity has its own section */}
        {!mobileScreen && (
          <div className="entire-cart-panel" >
            <div className="contents-frame">
              <div className="item-section">
                <Link to={props.productPath} >
                  <img src={props.imagePath} className="cartbuttonIMG" />
                </Link>
                <div className="item-and-button">
                  <div className="item-info">
                    <Link to={props.productPath} className="item-name" ><h5>{props.name}</h5></Link>
                    <p className="item-size">{props.variation_cat}: {props.variation_name}</p>
                  </div>
                  <Button className="remove-button" onClick={() => removeFromCart(props.variation_id)}>
                    <div className="remove-button-contents">
                      <Icon icon="trash" />
                      <p className="remove-header">Remove</p>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="quantity-section">
                <div className="quantity-buttons-frame">
                  <Button className="minus-button" onClick={handleMinus} disabled={disable_minus} ><Icon icon="minus" /></Button>
                  <input className="item-quantity" type="text" value={value} onChange={event => handleInputChange(event)}></input>
                  <Button className="plus-button" onClick={handlePlus} disabled={disable_plus}
                  ><Icon icon="plus" /></Button>
                </div>
              </div>
              <div className="price-section">
                <h5 className="item-price">${props.price}</h5>
              </div>
              <div className="total-section">
                <h5 className="item-total">${item_total.toFixed(2)}</h5>
              </div>
            </div>
            <Divider />
          </div>
        )}

        {/* If the screen is < minWidth, put Quantity section inside Item section*/}
        {mobileScreen && (

          <div className="entire-cart-panel" >
            <div className="contents-frame">
              <div className="item-section">
                <Link to={props.productPath} >
                  <img src={props.imagePath} className="cartbuttonIMG" />
                </Link>
                <div className="item-and-button">
                  <div className="item-info">
                    <h5><Link to={props.productPath} className="item-name" >{props.name}</Link></h5>
                    <p className="item-size">{props.variation_cat}: {props.variation_name}</p>
                    <div className="mobile-quantity-section">
                      <p className="mobile-quantity-header">Quantity: </p>
                      <InputNumber className="mobile-quantity-input" value={value} onChange={setValue} max={props.in_stock} min={0} />
                    </div>
                  </div>

                  <Button className="remove-button" onClick={() => removeFromCart(props.variation_id)} >
                    <div className="remove-button-contents">
                      <Icon icon="trash" className="remove-icon" />
                      <p className="remove-header">Remove</p>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="price-section">
                <h5 className="item-price">${props.price}</h5>
              </div>
              {!verySmallScreen && (<div className="total-section">
                <h5 className="item-total">${item_total.toFixed(2)}</h5>
              </div>)}
            </div>
            <Divider />
          </div>
        )}
      </>
    );
  };

  return (
    <CartContentsPanelInstance />
  );
}

export default CartContentsPanel;