import React from "react";
import "./logo.css";

function Logo(props) {
  return (
    <p className="logo" onClick={props.handleHomeButton}>
      Pintegr<i className="red-letter">a</i>m
    </p>
  );
}

export { Logo };
