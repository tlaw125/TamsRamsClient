import React from "react";
import { Panel, Rate } from 'rsuite';
import "./index.css";

function ModalReview(props) {

    const ModalReviewInstance = () => {
        return (
            <div className="modal-review-container">
                <Panel className="modal-review" bordered shaded>
                    <div className="modal-review-text">{props.text}</div>
                    <div className="modal-rating-and-reviewer">
                        <Rate readOnly defaultValue={props.rating} color="blue" size="xs" />
                        <br />
                        <div className="modal-reviewer-and-date">
                            <div className="modal-reviewer">{props.name}</div>
                            <div className="modal-review-date">{props.date}</div>
                        </div>
                    </div>
                </Panel>
            </div>
        );
    };

    return (
        <ModalReviewInstance />
    );
}

export default ModalReview;