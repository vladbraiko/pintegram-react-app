import React from "react";
import "./up-to-search-button.css";

function UpToSearchButton(props) {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      className={
        props.items.length > 0 && props.isLoaded
          ? "btn btn-outline-danger up-to-search-button js-up-button"
          : "btn btn-outline-danger is-hidden up-to-search-button js-up-button"
      }
    >
      ˆ
    </button>
  );
}

export { UpToSearchButton };
