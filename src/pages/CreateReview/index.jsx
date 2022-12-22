import React, { useState } from "react";
import { Rate, Input, ButtonToolbar, Button, Alert } from "rsuite";
import { useParams, Link  } from 'react-router-dom';
import Axios from "axios";
import "./index.css";

function CreateReview() {

    const [fieldEmpty, setFieldEmpty] = useState(false);
    let currentDate = new Date().toJSON().slice(0, 10);
    let rating = 5;

    let { id, product_name } = useParams();
    let productName = product_name.replace(/-/g, ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

    const handleRateChange = (e) => {
        rating = e;
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (event.target.review_email.value.trim() == "" || event.target.review_name.value.trim() == "" ||
            event.target.review_text.value.trim() == "") {
            setFieldEmpty(true);
        }
        else {
            setFieldEmpty(false);
            let reviewEmail = event.target.review_email.value,
                reviewName = event.target.review_name.value,
                reviewText = event.target.review_text.value
            // console.log(`rating: ${rating}
            // email: ${reviewEmail}
            // name: ${reviewName}
            // review: ${reviewText}
            // date: ${currentDate}`);
            Axios.post("https://tams-rams.herokuapp.com/api/create-review", {
                productID: id,
                productName: productName,
                customerEmail: reviewEmail,
                customerName: reviewName,
                reviewText: reviewText,
                rating: rating,
                currentDate: currentDate
            }).then((response) => {
                console.log("success!");
                Alert.success('Your review was successfully submitted. Thank you for your feedback!', 0);
            }).catch((err) => {
                Alert.error('Error: Something went wrong. Please try again or email us at shop.tamsrams@gmail.com', 0)
                console.log('FAILED...', err);
            });
        }

    }

    const CreateReviewInstance = () => {
        return (
            <div className="create-review-frame">
                <h2 className="create-review-header">Submit a Review for: <Link to={`/product/${id}/${product_name}`} >{productName}</Link></h2>
                <div className="create-review-contents">

                    <p className="create-review-form-header">Rating</p>
                    <Rate defaultValue={5} className="create-review-star-rating" onChange={(e) => handleRateChange(e)} />
                    <form className="create-review-form" onSubmit={(e) => handleSubmit(e)}>

                        <p className="create-review-form-header">Email Address (remains private)</p>
                        <Input className="create-review-input" name="review_email" type="email" placeholder="Enter your email" />

                        <p className="create-review-form-header">Name (to be displayed publicly)</p>
                        <Input className="create-review-input" placeholder="Name or nickname you wish to use" name="review_name" />

                        <p className="create-review-form-header">Review</p>
                        <Input componentClass="textarea" rows={5} name="review_text" className="create-review-input" placeholder="Write your comments here" />

                        <ButtonToolbar className="create-review-submit-button-and-message-frame">
                            <Button appearance="primary" type="submit" >Submit</Button>

                        </ButtonToolbar>
                        {fieldEmpty && (<div className="invalid-field-frame">
                            <p className="create-review-invalid-field-message">Please fill out all required fields.</p>
                        </div>)}
                    </form>
                </div>

            </div>
        );
    };

    return (
        <CreateReviewInstance />
    );

}

export default CreateReview;