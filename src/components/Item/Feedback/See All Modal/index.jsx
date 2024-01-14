import React, { useEffect, useState } from "react";
import { Modal, Loader } from 'rsuite';
import ModalReview from "../ModalReview";
import Pages from "../../../Pagination";
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Delayed from "../../../Delayed";
import "./index.css";

function SeeAllReviewsModal(props) {

    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let { id, product_name } = useParams();
    const [reviewList, setReviewList] = useState([]);
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

    let reviewCards = [];

    const errMessage = (<Delayed key="SAM" waitBeforeShow={5000}><h6 className="no-products-header">There
        are currently no reviews for this product.</h6></Delayed>);

    if (reviewList.length > 0) {
        reviewCards.push(reviewList.map((val) => {
            return (
                <ModalReview key={val.id} name={val.author} rating={val.rating} date={val.date_posted} text={val.review_text} />)
        }));
    }
    else {
        reviewCards.push(errMessage);
    }

    const SeeAllReviewsModalInstance = () => {
        return (
            <>
                {isLoading && <div className="modal_loader"><Loader size="md" /></div>}
                {!isLoading &&
                    <div className="modal-container">
                        <a onClick={handleOpen} className="see-all-reviews-button">See All Reviews</a>

                        <Modal overflow={true} show={open} onHide={handleClose} className="see-all-modal">
                            <Modal.Header>
                                <Modal.Title>All Reviews</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>{reviewCards}</div>
                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Pages/> */}
                            </Modal.Footer>
                        </Modal>
                    </div>}
            </>

        );
    };

    return (
        <SeeAllReviewsModalInstance />
    );
}

export default SeeAllReviewsModal;