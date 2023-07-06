import React from "react";
import { Panel, Rate } from 'rsuite';
import "./index.css";

function FeaturedReview(props) {

    const FeaturedReviewInstance = () => {
        return (
            <div className="featured-review-container">
                <Panel bordered shaded>
                    <div className="featured-review">
                        <div className="featured-review-text">{props.text}</div>
                        <div className="featured-rating-and-reviewer">
                            <Rate readOnly defaultValue={props.rating} color="blue" size="xs" />
                            <br />
                            <div className="modal-reviewer-and-date">
                                <div className="featured-reviewer">{props.name}</div>
                                <div className="featured-review-date">{props.date}</div>
                            </div>
                        </div>
                    </div>

                </Panel>
            </div>
        );
    };

    return (
        <FeaturedReviewInstance />
    );
}

export default FeaturedReview;