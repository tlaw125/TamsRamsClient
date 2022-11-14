import { Animation, Button, Icon } from 'rsuite';
import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Delayed from '../../Delayed';
import "./index.css";

function ShopLiveFishPanel() {

  const ShopLiveFishPanelInstance = ({ ...props }) => {
    return (
      <div className="background">
        <div className="shop-live-fish-frame">
          <div className="contents">

            <Delayed waitBeforeShow={1200}>
              <Animation.Slide in={true} placement="left">
                <div className="browse-all-fish-shop-live-frame">
                  <div>
                    <h1 className="hobbyist-bred-text">Hobbyist bred and raised!</h1>
                    <p className="browse-fish-text">Browse all of our fish here!</p>
                  </div>
                  <Button href="/browse/fish/all?sortby=product_name&orderby=asc" appearance="primary" className='shop-live-fish-button'>
                      <div className="browse-button-contents">
                        <p className="shop-live-fish-button-text">SHOP LIVE FISH</p>
                        <FontAwesomeIcon icon={faArrowRightLong} className="arrow-icon" />
                      </div>
                  </Button>
                </div>
              </Animation.Slide>
            </Delayed>

          </div>
          <a href="https://www.instagram.com/aquarist_tl/" target="_blank" rel="noreferrer noopener">
            <div className="watermark">
              <Icon icon="instagram" size="2x" />
              <h4 className="watermark-text">@Aquarist_TL</h4>
            </div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <ShopLiveFishPanelInstance />
  );
}

export default ShopLiveFishPanel;