import React from "react";

function ResultContainer(props) {
  return (
    <React.Fragment>
      <div className="container">
        <section className="result-container js-result-container ">
          {props.children}
        </section>
      </div>
    </React.Fragment>
  );
}

export { ResultContainer };
