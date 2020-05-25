import React from "react";
import "./search-form.css";

function SearchForm(props) {
  const makeQuery = (e) => {
    e.preventDefault();
    props.makeQuery();
  };

  const changeInputValue = (e) => {
    props.queryChange(e.target.value);
  };

  return (
    <form
      className="input-group mb-3 js-search-form "
      onSubmit={makeQuery}
      onChange={props.handleResetPage}
    >
      <input
        name="search"
        type="text"
        className="form-control"
        placeholder="Enter keyword"
        aria-label="keyword"
        aria-describedby="button-addon2"
        onChange={changeInputValue}
        value={props.value}
      />
      <div className="input-group-append">
        <button className="btn btn-danger" type="submit" id="button-addon2">
          Search
        </button>
      </div>
    </form>
  );
}

export { SearchForm };
