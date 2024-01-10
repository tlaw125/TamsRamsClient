import React, { useEffect, useState } from "react";
import Review from './Review';
import SeeAllReviewsModal from './See All Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faStar, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from 'react-router-dom';
import { Animation, Button } from "rsuite";
import Axios from 'axios';
import Delayed from '../../Delayed';
import "./index.css";

function Feedback(props) {

    let { id, product_name } = useParams();
    const [reviewList, setReviewList] = useState([]);
    const [firstReviewIndex, setFirstReviewIndex] = useState(0);
    const [secondReviewIndex, setSecondReviewIndex] = useState(4);
    const [isLoading, setLoading] = useState(true);
    let productName = product_name.replace(/-/g, ' ');


    useEffect(() => {
        let isMounted = true;
        Axios.get("https://tamsramsdb.onrender.com/api/get-reviews", {
            params:
            {
                productID: id,
                productName: productName
            }
        }).then((response) => {
            if (isMounted) {
                setReviewList(response.data);
                setLoading(false);
            }
        })
        return () => { isMounted = false };
    }, []);

    const errMessage = (<Delayed key="FI" waitBeforeShow={3000}><h6 className="no-products-header">There
        are currently no reviews for this product.</h6></Delayed>);

    const [placement, setPlacement] = useState("right");

    const prevReview = () => {
        let newFirstIndex = parseInt(firstReviewIndex, 10) - 4;
        let newSecondIndex = parseInt(secondReviewIndex, 10) - 4;
        if (firstReviewIndex > 0) { setPlacement("left") };
        if (newFirstIndex > 0) {
            setFirstReviewIndex(newFirstIndex);
        }
        else {
            setFirstReviewIndex(0);
        }
        if (newSecondIndex >= 4) {
            if (newSecondIndex >= 4 && newSecondIndex % 4 == 0) {
                setSecondReviewIndex(newSecondIndex);
            }
            else {
                setSecondReviewIndex(newSecondIndex + (4 - (newSecondIndex % 4)));
            }
        }
        else {
            setSecondReviewIndex(4);
        }



        // console.log("first index:" + firstReviewIndex)
        // console.log("second index: " + secondReviewIndex)
    }

    const nextReview = () => {
        let newFirstIndex = parseInt(firstReviewIndex, 10) + 4;
        let newSecondIndex = parseInt(secondReviewIndex, 10) + 4;
        if (newFirstIndex < reviewList.length) {
            setFirstReviewIndex(newFirstIndex);
            setPlacement("right");
        }
        if (newSecondIndex < reviewList.length) {
            setSecondReviewIndex(newSecondIndex);
        }
        else {
            setSecondReviewIndex(reviewList.length);
        }
        // console.log("first index:" + firstReviewIndex)
        // console.log("second index: " + secondReviewIndex)
    }

    const FeedbackInstance = () => {
        return (
            <div className="feedback">
                {reviewList.length > 0 && (<>
                    <div className="feedback-title-frame">
                        <div className='feedback-title-and-see-all-frame'>
                            <div className="feedback-title">
                                <FontAwesomeIcon icon={faStar} size="lg" className="feedback-star" />&nbsp;
                                <h4>{props.rating} ({props.numReviews} Reviews)</h4>
                            </div>
                            <SeeAllReviewsModal />
                        </div>
                        <div className="write-review-and-pagination">
                            <div className="write-review-frame"><Link to={`/create-review/${id}/${product_name}`}><Button appearance="default" className="write-review-button">
                                <div className="review-button-icon">
                                    <FontAwesomeIcon icon={faPenToSquare} size="lg" className="write-review-icon" />
                                    <p>Write a Review</p>
                                </div></Button></Link></div>
                            <div className="feedback-pagination">
                                <FontAwesomeIcon icon={faAngleLeft} size="lg" onClick={prevReview} /> &nbsp;&nbsp;&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faAngleRight} size="lg" onClick={nextReview} />
                            </div>
                        </div>
                    </div>
                    <Animation.Slide in={true} placement={placement}>
                        <div className='feedback-review-frame'>
                            <div className='feedback-div'>
                                {reviewList.slice(firstReviewIndex, secondReviewIndex).map((val) => {
                                    return (
                                        <Review key={val.id} name={val.author} rating={val.rating} date={val.date_posted} text={val.review_text} />
                                    )
                                })}
                            </div>
                        </div>
                    </Animation.Slide>
                </>)}
                {reviewList.length < 1 && (<div className="no-reviews-frame">
                    {errMessage}
                    <Link to={`/create-review/${id}/${product_name}`}><Button appearance="default" className="write-review-button">
                        <div className="review-button-icon">
                            <FontAwesomeIcon icon={faPenToSquare} size="lg" className="write-review-icon" />
                            <p>Write a Review</p>
                        </div></Button></Link>
                </div>)}

            </div>
        );
    };

    return (
        <FeedbackInstance />
    );
}

export default Feedback;