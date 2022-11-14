import React from "react";
import { Rate } from 'rsuite';
import "./index.css";

function Review(props) {

    const ReviewInstance = () => {
        return (
            <div className="review-container">
                <div className="review-text">{props.text}</div>
                <div className="rating-and-reviewer">
                    <Rate readOnly defaultValue={props.rating} color="blue" size="xs" />
                    <br />
                    <div className="reviewer-and-date">
                        <div className="reviewer">{props.name}</div>
                        <div className="review-date">{props.date}</div>
                    </div>
                </div>
            </div>
        );
};

return (
    <ReviewInstance />
);
}

export default Review;