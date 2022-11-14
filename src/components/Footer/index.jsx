import { Container } from 'rsuite';
import React from "react";
import { Link } from 'react-router-dom';
import "./index.css";

function Footer() {

  const FooterInstance = ({ ...props }) => {
    return (
      <Container className="footer">
        <Link to="/" >
          <h4 className="instagram">
            @Aquarist_TL on Instagram
          </h4>
        </Link>
      </Container>
    );
  };

  return (
    <FooterInstance />
  );
}

export default Footer;