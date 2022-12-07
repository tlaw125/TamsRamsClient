import { Dropdown, Icon, Input, InputGroup, Nav, Sidenav } from 'rsuite';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish, faCircleInfo, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./index.css";

function SideNav() {

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

  const SideNav = () => {
    return (

      <Sidenav appearance="inverse" className="sidenav-body"
        defaultOpenKeys={['1', '2', '3']}>
        <Sidenav.Body>
          <Nav className="side-search-bar">
            <InputGroup>
              <InputGroup.Button className="side-nav-search-icon">
                <Icon icon='search' />
              </InputGroup.Button>
              <Input className="side-nav-search-bar" placeholder="Search..." size="md" onKeyDown={(e) => updateSearchInput(e)} />
            </InputGroup>
          </Nav>
          <Nav>
            <Dropdown eventKey="1" title="Fish" icon={<FontAwesomeIcon icon={faFish} className="fa-icon" />}>
              <Dropdown.Item eventKey="1-1-1" href="/browse/fish/all?sortby=product_name&orderby=asc">All Fish</Dropdown.Item>
              <Dropdown.Item eventKey="1-1-2" href="/browse/fish/angelfish?sortby=product_name&orderby=asc">Angelfish</Dropdown.Item>
              <Dropdown.Item eventKey="1-1-3" href="/browse/fish/livebearers?sortby=product_name&orderby=asc">Livebearers</Dropdown.Item>
              <Dropdown.Item eventKey="1-1-4" href="/browse/fish/plecos?sortby=product_name&orderby=asc">Plecos</Dropdown.Item>
              <Dropdown.Item eventKey="1-1-5" href="/browse/fish/rams?sortby=product_name&orderby=asc">Rams</Dropdown.Item>
              <Dropdown.Item eventKey="1-1-6" href="/browse/fish/ricefish?sortby=product_name&orderby=asc">Ricefish</Dropdown.Item>
              <Dropdown.Item eventKey="1-1-7" href="/browse/fish/other?sortby=product_name&orderby=asc">Other</Dropdown.Item>
              <Dropdown.Item divider />
            </Dropdown>

            <Dropdown eventKey="3" title="Plants" icon={<FontAwesomeIcon icon={faSeedling} className="fa-icon" />}>
              <Dropdown.Item eventKey="3-1-1" href="/browse/plants/all?sortby=product_name&orderby=asc">All Plants</Dropdown.Item>
              <Dropdown.Item eventKey="3-1-2" href="/browse/plants/moss?sortby=product_name&orderby=asc">Moss</Dropdown.Item>
              <Dropdown.Item eventKey="3-1-3" href="/browse/plants/stem?sortby=product_name&orderby=asc">Stem</Dropdown.Item>
              <Dropdown.Item divider />
            </Dropdown>

            <Dropdown eventKey="2" title="Info" icon={<FontAwesomeIcon icon={faCircleInfo} className="fa-icon" />}>
              <Dropdown.Item eventKey="2-1-1" href="/shipping-doa-policy">Shipping &amp; DOA Policy</Dropdown.Item>
              <Dropdown.Item eventKey="2-1-2" href="/FAQ">FAQ</Dropdown.Item>
              <Dropdown.Item eventKey="2-1-3" href="/about-us">About Us</Dropdown.Item>
              <Dropdown.Item eventKey="2-1-4" href="/contact-us">Contact Us</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>

    );
  };

  return (
    <SideNav />
  );
}

export default SideNav;