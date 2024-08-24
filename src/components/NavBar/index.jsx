import { Button, Icon, Nav } from 'rsuite';
import React, { useState, useEffect } from "react";
import TopNav from './TopNav';
import SideNav from './SideNav';
import CartBadge from '../CartBadge';
import "./index.css";

function NavBar() {

  const minWidth = 980;
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < minWidth) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < minWidth) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NavInstance = () => {
    return (
      <>
        {/* If the screen is > minWidth, put navbar at top */}
        {!mobile &&
          <><TopNav />
            {/* <div className="infoMessage">
              <p>No shipping on the week of May 27th. Happy Memorial Day!</p>
            </div> */}
            </>
        }

        {/* If the screen is < minWidth, put navbar on the side 
        and add menu button to toggle it */}
        {mobile && (

          <><div className="top-navbar">
            <div className='menu-button'>
              <Button className="nav-button" appearance="subtle" onClick={() => setSidebar(!sidebar)}>
                <Icon icon='bars' size="lg"
                />
              </Button>
            </div>
            <Nav className="logo">
              <a href="/" className="mobile-tams-rams"><div className="mobile-logo-container">
                <h1 className="mobile-tams-rams-title">TAM'S</h1>
                <img src={"./tams-rams-logomark.svg"} className="mobile-logo-img"></img>
                <h1 className="mobile-tams-rams-title">RAMS</h1>
              </div></a>
            </Nav>
            <Nav className="cart-button">
              <CartBadge />
            </Nav>
          </div>
            <div className="infoMessage">
              <p>No shipping on the week of September 2nd. Happy Labor Day!</p>
            </div>
            </>
        )}

        {mobile && sidebar && (<div className={sidebar ? "sidebar active" : "sidebar"}>
          <SideNav key="side-nav" />
        </div>
        )}
      </>
    );
  };

  return (
    <NavInstance />
  );
}

export default NavBar;