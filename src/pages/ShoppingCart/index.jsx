import React from "react";
import CartPanel from '../../components/Panels/CartPanel'

function ShoppingCart() {

    const CartInstance = ({ ...props }) => {
        return (
            <CartPanel />
        );
    };

    return (
        <CartInstance />
    );

}

export default ShoppingCart;