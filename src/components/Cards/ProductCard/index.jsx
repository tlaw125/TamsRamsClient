import React from "react";
import { Link } from 'react-router-dom'
import "./index.css";

function ProductCard(props) {

  const ProductCardInstance = () => {
    return (
      <div className="entire-panel" >
          <Link to={props.productPath} >
            <img src={require(props.imagePath)} className="buttonIMG" />
          </Link>
          <div className="product-info">
            <Link to={props.productPath} className="product-name" ><h5 >{props.name}</h5></Link>
            <h5 className="product-price">${props.price}</h5>
          </div>
      </div>
    );
  };

  return (
    <ProductCardInstance />
  );
}

export default ProductCard;