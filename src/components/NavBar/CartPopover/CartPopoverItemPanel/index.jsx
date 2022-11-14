import React, { useState, useEffect } from "react";
import { Button, Icon, InputNumber } from 'rsuite';
import "./index.css";

function CartPopoverItemPanel(props) {

  const [value, setValue] = useState(props.quantity_in_cart);
  const [isMounted, setMounted] = useState(true);
  
  const removeFromCart = (prod) => {
    let cart = JSON.parse(localStorage.getItem("tamsramscart"));
    delete cart[prod];
    localStorage.setItem("tamsramscart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  }

  useEffect(() => {
    if(isMounted){
      if (value != props.quantity_in_cart) {
        let cart = localStorage.getItem("tamsramscart") ? JSON.parse(localStorage.getItem("tamsramscart")) : {};
        if (value <= props.in_stock) {
          cart[props.variation_id] = parseInt(value, 10);
          localStorage.setItem("tamsramscart", JSON.stringify(cart));
          window.dispatchEvent(new Event("storage"));
        }
        else{
          setValue(props.in_stock);
        }
      }
      if (value == (props.in_stock)) {
      }
      if (value == 0) {
        removeFromCart(props.variation_id);
      }
    }
  }, [value]);

  useEffect(() => {
    return () => {
        setValue(props.quantity_in_cart);
        setMounted(false);
    }
}, []);

  const CartPopoverItemPanelInstance = () => {
    return (

      <div className="cart-popover" >
        <div className="popover-contents">
          <div className="popover-item-section">

            <div className="popover-image-and-remove-section">
              <a href={props.productPath} >
                <img src={props.imagePath} className="popover-cartbuttonIMG" />
              </a>
              <Button size="sm" className="popover-remove-button" onClick={() => removeFromCart(props.variation_id)}>
                <div className="popover-remove-button-contents">
                  <Icon icon="trash" className="popover-remove-icon" />
                  <p className="popover-remove-header">Remove</p>
                </div>
              </Button>
            </div>

            <div className="popover-item-and-input">
              <div className="popover-item-info">
                <a href={props.productPath} className="popover-item-name" ><h6>{props.name}</h6></a>
                <p className="popover-item-size">{props.variation_cat}: {props.variation_name}</p>
                <div className="popover-quantity-section">
                  <InputNumber size="sm" className="popover-quantity-input" value={value} onChange={setValue} max={props.in_stock} min={0} />
                </div>
              </div>


            </div>
          </div>

          <div className="popover-total-section">
            <h5 className="popover-item-total">${props.price}</h5>
          </div>
        </div>
      </div>
    );
  };

  return (
    <CartPopoverItemPanelInstance />
  );
}

export default CartPopoverItemPanel;