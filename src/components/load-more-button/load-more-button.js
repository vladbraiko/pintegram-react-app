import React from "react";
import "./load-more-button.css";

function LoadMoreButton(props) {
  const loading = props.loading;
  const isLoaded = props.isLoaded;
  const items = props.items;
  let result = null;

  const scrollDown = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const loadMoreImages = (e) => {
    props.handleNextPageFetch();

    if (e.type === "click") {
      setTimeout(scrollDown, 500);
    }
  };

  if (loading) {
    result = (
      <button
        type="button"
        className="btn btn-outline-danger js-load-more-button load-more-button"
      >
        Loading...
      </button>
    );
  } else if (isLoaded && items.length > 0) {
    result = (
      <button
        type="button"
        className="btn btn-outline-danger js-load-more-button load-more-button"
        onClick={loadMoreImages}
      >
        Load more
      </button>
    );
  } else result = null;

  return <React.Fragment>{result}</React.Fragment>;
}

export { LoadMoreButton };
