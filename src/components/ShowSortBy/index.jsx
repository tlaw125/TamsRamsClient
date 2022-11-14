import React from "react";
import { Dropdown } from 'rsuite';
import { useParams} from 'react-router-dom';
import "./index.css";

function ShowSortBy(props) {

  let { category, subcategory } = useParams();

  const ShowSortByInstance = () => {
    return (
      <div className="ShowSortByContainer">
              <Dropdown title="Sort By" appearance="default" className="select-options" placement="bottomEnd" {...props}>
                  <Dropdown.Item href={`/browse/${category}/${subcategory}?sortby=product_name&orderby=asc`}>Name</Dropdown.Item>
                  {/* <Dropdown.Item href={`/browse/${category}/${subcategory}?sortby=product_name&orderby=desc`}>Most Popular</Dropdown.Item> */}
                  <Dropdown.Item href={`/browse/${category}/${subcategory}?sortby=id&orderby=desc`}>Newest</Dropdown.Item>
                  <Dropdown.Item href={`/browse/${category}/${subcategory}?sortby=id&orderby=asc`}>Oldest</Dropdown.Item>
                  <Dropdown.Item href={`/browse/${category}/${subcategory}?sortby=price&orderby=asc`}>Price: Low to High</Dropdown.Item>
                  <Dropdown.Item href={`/browse/${category}/${subcategory}?sortby=price&orderby=desc`}>Price: High to Low</Dropdown.Item>
              </Dropdown>
      </div>
      
    );
  };

  return (
      <ShowSortByInstance />
  );
}

export default ShowSortBy;