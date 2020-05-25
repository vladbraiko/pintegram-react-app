import React from "react";
import { LoadMoreButton } from "../load-more-button/load-more-button";
import { ImageCard } from "../image-card/image-card";
import { ResultContainer } from "../result-container/result-container";
import PNotify from "../../plugins/pnotify";
import "./main-container.css";

function MainContainer(props) {
  const imagesArr = props.items;
  let result = null;

  if (imagesArr.length > 0) {
    result = imagesArr.map((item) => {
      return <ImageCard data={item} key={item.id} />;
    });
  } else if (
    imagesArr.length === 0 &&
    props.isLoaded &&
    !props.loading &&
    props.notice
  ) {
    result = PNotify.notice({
      title: "Sorry:( There are no images for your query.",
      delay: 1000,
      stack: { maxOpen: 1, maxStrategy: "close", dir1: "down" },
    });
  }

  return (
    <React.Fragment>
      <ResultContainer>
        {imagesArr.length && props.isLoaded ? (
          <div className="row row-cols-1 row-cols-md-3">{result}</div>
        ) : (
          <h1 className="main-theme">Find your inspiration.</h1>
        )}
      </ResultContainer>
      <LoadMoreButton
        loading={props.loading}
        isLoaded={props.isLoaded}
        items={props.items}
        handleNextPageFetch={props.handleNextPageFetch}
      />
    </React.Fragment>
  );
}

export { MainContainer };

// PNotify.notice({
//   title: "Sorry:( There are no images for your query.",
//   delay: 1000,
//   stack: { maxOpen: 1, maxStrategy: "close", dir1: "down" },
// });
