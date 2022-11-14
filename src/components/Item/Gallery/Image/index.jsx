import React from "react";
import ModalImage from "react-modal-image";
import "./index.css";

function Image(props) {

  const ImageInstance = () => {
    return (
      <ModalImage className="image"
        small={props.imagePath}
        medium={props.imagePath}
        hideDownload={true}
        hideZoom={true}
      />

    );
};

return (
  <ImageInstance />
);
}

export default Image;