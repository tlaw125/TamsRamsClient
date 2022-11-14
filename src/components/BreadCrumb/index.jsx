import React from "react";
import { Link } from 'react-router-dom'
import { Breadcrumb, Icon } from 'rsuite';
import "./index.css";

function BreadCrumb(props) {
  let prevPage = "";
  if (props.prevPage !== undefined) {prevPage = props.prevPage;}

  const BreadCrumbInstance = () => {
    return (
      <>
        {prevPage.length > 0 && (
          <>
            <Breadcrumb separator={<Icon icon="angle-right" />}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href={props.prevPageLink}>{props.prevPage}</Breadcrumb.Item>
              <Breadcrumb.Item active>{props.page}</Breadcrumb.Item>
            </Breadcrumb>
          </>
        )
        }

        {prevPage.length == 0 && (
          <>
            <Breadcrumb separator={<Icon icon="angle-right" />}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>{props.page}</Breadcrumb.Item>
            </Breadcrumb>
          </>
        )
        }

      </>

    );
  };

  return (
    <BreadCrumbInstance />
  );
}

export default BreadCrumb;