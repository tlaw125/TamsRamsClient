import React from "react";
import { Button } from "rsuite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function OrderConfirmationPage() {

    // Reset Cart
    localStorage.removeItem("tamsramscart");

    const OrderConfirmationPageInstance = () => {
        return (
            <div className="order-confirmation-frame">
                <div className="order-confirmation-contents">
                    <FontAwesomeIcon icon={faCircleCheck} className="order-confirmation-check-icon" />

                    <h2 className="order-confirmation-header">Thank you for your order! </h2>
                    <p className="order-confirmation-text">Your order has been placed and a confirmation email
                        with the order details will be sent to you shortly. If you have any questions, such as when your items
                        will ship, please refer to our <a href="/shipping-doa-policy">Shipping &amp; DOA Policy</a> page
                        or our <a href="/FAQ">FAQ</a> page.  </p>

                    <p className="order-confirmation-text">We sincerely thank you for shopping at Tam's Rams
                        and hope you visit again soon!</p>

                    <Button appearance="primary" className="order-confirmation-cont-shop-button" href="/">
                        <div className="order-confirmation-text-with-icon">
                            <p className="order-confirmation-cont-shop-text">Continue Shopping</p>
                            <FontAwesomeIcon icon={faCircleArrowRight} className="order-confirmation-cont-shop-icon" />
                        </div>
                    </Button>

                </div>

            </div>
        );
    };

    return (
        <OrderConfirmationPageInstance />
    );

}

export default OrderConfirmationPage;