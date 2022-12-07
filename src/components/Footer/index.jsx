import { Divider, Icon } from 'rsuite';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./index.css";

function Footer() {

  const minwidth = 600;
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < minwidth) {
      setMobileScreen(true);
    }
    else {
      setMobileScreen(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < minwidth) {
        setMobileScreen(true);
      }
      else {
        setMobileScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const BigScreenHelpLinks = (
    <div className="footer-middle">
      <p className='footer-header'>Help</p>
      <div className='footer-help-links'>
        <Link to="/FAQ" className="footer-help-link">FAQ</Link>
        <Link to="/shipping-doa-policy" className="footer-help-link">Shipping & DOA Policy</Link>
        <Link to="/terms-and-conditions" className="footer-help-link">Terms and Conditions</Link>
        <Link to="/privacy-policy" className="footer-help-link">Privacy Policy</Link>
        <Link to="/contact-us" className="footer-help-link">Contact Us</Link>
      </div>
    </div>
  )

  const MobileScreenHelpLinks = (
    <div className="footer-middle">
      <div className='footer-divider'/>
      <div className='footer-help-links'>
        <Link to="/FAQ" className="footer-help-link">FAQ</Link>
        <Divider vertical className='footer-vertical-divider'/>
        <Link to="/shipping-doa-policy" className="footer-help-link">Shipping & DOA Policy</Link>
        <Divider vertical className='footer-vertical-divider'/>
        <Link to="/terms-and-conditions" className="footer-help-link">Terms and Conditions</Link>
        <Divider vertical className='footer-vertical-divider'/>
        <Link to="/privacy-policy" className="footer-help-link">Privacy Policy</Link>
        <Divider vertical className='footer-vertical-divider'/>
        <Link to="/contact-us" className="footer-help-link">Contact Us</Link>
      </div>
      <div className='footer-divider'/>
    </div>
  )

  const FooterInstance = () => {
    return (
      <div className="footer">
        <div className="footer-left">
          <p className='footer-header'>Tam's Rams</p>
          <p className="footer-blurb">Here at Tam's Rams, we strive to promote the aquarium hobby by providing unique and
            rare fish to fishkeepers across the country. Every fish listed for sale on this site has been bred in our
            fish room with love and care. They are eagerly waiting for their new homes!
          </p>
        </div>

        {!mobileScreen && BigScreenHelpLinks}
        {mobileScreen && MobileScreenHelpLinks}
        <div className="footer-right">
          <p className='footer-header'>Follow Us</p>
          <div>
            <a href="https://www.instagram.com/aquarist_tl/" target="_blank" rel="noreferrer noopener">
              <Icon className='footer-socials' icon="instagram" size="lg" />
            </a>
            <a href="https://www.youtube.com/channel/UC5RiHy5Jxk_Pn-5lhjNPjAw" target="_blank" rel="noreferrer noopener">
              <Icon className='footer-socials' icon="youtube-play" size="lg" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <FooterInstance />
  );
}

export default Footer;