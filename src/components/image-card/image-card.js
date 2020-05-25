import React from "react";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/src/styles/main.scss";

import "./image-card.css";

function ImageCard(props) {
  const image = props.data;

  function openImageInModal(event) {
    if (event.target.nodeName === "IMG") {
      const instance = basicLightbox.create(`<img src="${event.target.src}">`);
      instance.show();
    }
    return;
  }

  return (
    <React.Fragment>
      <div className="col mb-4">
        <div className="card" onClick={openImageInModal}>
          <img
            src={image.webformatURL}
            className="card-img-top"
            alt={image.tags}
          />
          <div className="card-body">
            <p className="stats-item">
              <i className="material-icons">thumb_up</i>
              {image.likes}
            </p>
            <p className="stats-item">
              <i className="material-icons">visibility</i>
              {image.views}
            </p>
            <p className="stats-item">
              <i className="material-icons">comment</i>
              {image.comments}
            </p>
            <p className="stats-item">
              <i className="material-icons">cloud_download</i>
              {image.downloads}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { ImageCard };
