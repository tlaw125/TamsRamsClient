import { Icon, IconButton, Whisper, Popover, Badge } from 'rsuite';
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CartPopover from '../NavBar/CartPopover';
import "./index.css";

function CartBadge() {
  const [cart, setCart] = useState(localStorage.getItem("tamsramscart") ? JSON.parse(localStorage.getItem("tamsramscart")) : []);
  const [numCartItems, setNumCartItems] = useState(0);
  const [cartChanged, setCartChanged] = useState(false);

  const location = useLocation();
  const current_pathname = location.pathname;


  useEffect(() => {
    let isMounted = true;
    window.addEventListener('storage', () => {
      if (isMounted) {
        if (localStorage.getItem("tamsramscart")) {
          if (cart != localStorage.getItem("tamsramscart")) {
            setCartChanged(true);
            setCart(JSON.parse(localStorage.getItem("tamsramscart")));
          }
        }
      }
    });
    return () => {
      isMounted = false;
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (localStorage.getItem("tamsramscart")) {
        setCart(JSON.parse(localStorage.getItem("tamsramscart")));
        const cartsum = Object.values(cart).reduce((partialSum, a) => partialSum + a, 0);
        if (numCartItems != cartsum) {
          setNumCartItems(cartsum);
        }
      }
    }
    return () => {
      setCartChanged(false);
      isMounted = false;
    }
  }, [cartChanged]);


  const speaker = (
    <Popover className='mobile-shopping-cart-popover'>
      <CartPopover />
    </Popover>
  );

  const noBadge = (
    <IconButton
      appearance="subtle"
      className="top-nav-button"
      href="/cart"
      icon={<Icon icon="shopping-cart" />}
    />
  );

  const withBadge = (
    <Badge color="blue" content={numCartItems}>
      <IconButton
        appearance="subtle"
        className="top-nav-button"
        href="/cart"
        icon={<Icon icon="shopping-cart" />}
      />
    </Badge>
  );

  const CartBadgeInstance = () => {
    return (
      <>
        {current_pathname === "/shipping" && (
          <div>
            {withBadge}
          </div>

        )}

        {numCartItems > 0 && current_pathname !== "/shipping" &&
          (
            <Whisper
              placement="bottomEnd"
              trigger="hover"
              controlId="control-id-hover-enterable"
              speaker={speaker}
              enterable="true"
              preventOverflow={true}
            >
              {withBadge}
            </Whisper>

          )}

        {numCartItems == 0 && current_pathname !== "/shipping" &&
          (
            <Whisper
              placement="bottomEnd"
              trigger="hover"
              controlId="control-id-hover-enterable"
              speaker={speaker}
              enterable="true"
              preventOverflow={true}
            >
              {noBadge}
            </Whisper>

          )}

      </>

    );
  };

  return (
    <CartBadgeInstance />
  );
}

export default CartBadge;