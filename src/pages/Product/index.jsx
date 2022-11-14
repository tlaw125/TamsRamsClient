import React from "react";
import Item from '../../components/Item'

function Product() {


    const ProductInstance = ({ ...props }) => {

        return (
            <Item/>
        );
    };

    return (
        <ProductInstance />
    );

}

export default Product;