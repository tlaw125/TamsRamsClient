import React from "react";
import FeaturedReview from './FeaturedReview';
import "./index.css";

function FeaturedReviewsPanel() {

  const FeaturedReviewsPanelInstance = ({ ...props }) => {
    return (
      <div>
        <img src={"images/wavey_line_divider.png"} className="wavey-divider-img"></img>
        <div className="featured_reviews_panel_container" >
          <div className="featured_reviews_title">
            <h2>Customer Testimonials</h2>
          </div>
          <div className="featured_reviews_container">
            <div className="featured_review">
              <FeaturedReview name="Sean - Atlanta, Georgia" rating={5} date="Apr 25, 2023"
                text="I received my Rams today and they are STUNNING! Tam's Rams is 
              the best breeder in the industry - Great Service and excellent quality fish!" />
            </div>
            <div className="featured_review">
              <FeaturedReview name="Josiah" rating={5} date="Apr 4, 2025"
                text="The guppies arrived without delay and were all alive. Tammy is really helpful with her 
                customer service, so I would recommend anyone to order her fish from her...
                Imagine the pictures for the fish, and when you get them, they look 10x better. Awesome fish 
                and awesome service. I could write a whole book on how much I love these fish and how 
                great the service was!!!!! " />
            </div>
            <div className="featured_review">
              <FeaturedReview name="Medaka Problem" rating={5} date="Jan 24, 2023"
                text="The fish are beautiful, healthy and were schooling and eating within minutes of
               adding them to the tub. I was so happy with the fish and impressed with the speed and 
               service I placed another the day the first one came for a dozen more fish... I'll be on the look out for new 
               and interesting fish on the
                website, and definitely be purchasing more in the future!" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <FeaturedReviewsPanelInstance />
  );
}

export default FeaturedReviewsPanel;