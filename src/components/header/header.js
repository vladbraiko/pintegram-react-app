import React from "react";
import { SearchForm } from "../search-form/search-form";
import { Logo } from "../logo/logo";
import "./header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="container search">
        <SearchForm
          value={props.inputValue}
          queryChange={props.onQueryChange}
          makeQuery={props.onMakeQuery}
          handleResetPage={props.handleResetPage}
        />
        <Logo handleHomeButton={props.handleHomeButton} />
      </div>
    </header>
  );
}

export { Header };
