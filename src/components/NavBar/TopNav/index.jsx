import { Dropdown, Icon, Input, InputGroup, Nav } from 'rsuite';
import React from "react";
import CartPopover from '../CartPopover';
import CartBadge from '../../CartBadge';
import { useNavigate } from "react-router-dom";
import "./index.css";

function TopNav() {

  const navigate = useNavigate();

  let searchInput = "";
  let searchPath = "";

  const updateSearchInput = (e) => {
    if (e.key === 'Enter') {
      searchInput = e.target.value;
      searchPath = ("/search-results?q=" + searchInput.replace(/\s/g, '+').toLowerCase())
      navigate(searchPath);
    }
  };

  const TopNav = () => {
    return (
      <div className="top-nav">

        <div className='top-nav-dropdown-frame'>
          <Nav className="top-nav-dropdown">
            <Dropdown toggle="true" className="top-nav-button" title="Shop" trigger={['click', 'hover']}>
              <Dropdown.Menu title="Fish">
                <Dropdown.Item href="/browse/fish/all?sortby=product_name&orderby=asc">All Fish</Dropdown.Item>
                <Dropdown.Item href="/browse/fish/angelfish?sortby=product_name&orderby=asc">Angelfish</Dropdown.Item>
                <Dropdown.Item href="/browse/fish/goldfish?sortby=product_name&orderby=asc">Goldfish</Dropdown.Item>
                <Dropdown.Item href="/browse/fish/livebearers?sortby=product_name&orderby=asc">Livebearers</Dropdown.Item>
                <Dropdown.Item href="/browse/fish/plecos?sortby=product_name&orderby=asc">Plecos</Dropdown.Item>
                <Dropdown.Item href="/browse/fish/rams?sortby=product_name&orderby=asc">Rams</Dropdown.Item>
                <Dropdown.Item href="/browse/fish/ricefish?sortby=product_name&orderby=asc">Ricefish</Dropdown.Item>
                <Dropdown.Item href="/browse/fish/other?sortby=product_name&orderby=asc">Other</Dropdown.Item>
              </Dropdown.Menu>
              <Dropdown.Menu title="Plants">
                <Dropdown.Item href="/browse/plants/all?sortby=product_name&orderby=asc">All Plants</Dropdown.Item>
                <Dropdown.Item href="/browse/plants/moss?sortby=product_name&orderby=asc">Moss</Dropdown.Item>
                <Dropdown.Item href="/browse/plants/stem?sortby=product_name&orderby=asc">Stem</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="top-nav-dropdown">
            <Dropdown toggle="true" className="top-nav-button" title="Info" trigger={['click', 'hover']}>
              <Dropdown.Item href="/shipping-doa-policy">Shipping &amp; DOA Policy</Dropdown.Item>
              <Dropdown.Item href="/FAQ">FAQ</Dropdown.Item>
              <Dropdown.Item href="/about-us">About Us</Dropdown.Item>
              <Dropdown.Item href="/contact-us">Contact Us</Dropdown.Item>
            </Dropdown>
          </Nav>
        </div>

        <Nav className="top-nav-logo">
          <a href="/" className="tams-rams">
            <div className="logo-container">
              <h1>TAM'S</h1>
              <img src={"./tams-rams-logomark.svg"} className="logo-img"></img>
              <h1>RAMS</h1>
            </div></a>
        </Nav>

        <div className='top-nav-search-and-cart-frame'>
          <Nav className="top-nav-search-icon">
            <InputGroup >
              <InputGroup.Addon className="top-nav-search-icon">
                <Icon icon='search' />
              </InputGroup.Addon>
              <Input className="top-nav-search-bar" placeholder="Search..." size="md" onKeyDown={(e) => updateSearchInput(e)} />
            </InputGroup>
          </Nav>
          <Nav className="top-nav-cart-button-frame">
            <CartBadge />
          </Nav>
        </div>

      </div>

    );
  };

  return (
    <TopNav />
  );
}

export default TopNav;