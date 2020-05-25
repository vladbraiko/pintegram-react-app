import React, { useState } from "react";
import { Header } from "./components/header/header";
import { MainContainer } from "./components/main-container/main-container";
import { UpToSearchButton } from "./components/up-to-search-button/up-to-search-button";
import { Footer } from "./components/footer/footer";

function App() {
  const [query, setQuery] = useState("");
  const [responsePage, setResponsePage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [notice, setNotice] = useState(false);

  const apiKey = "16192319-9ae9d95026dacaeb88e2fcf6c";
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${responsePage}&per_page=12&key=${apiKey}`;

  const handleMakeFetch = () => {
    if (query === "") return;

    setNotice(true);
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(({ hits }) => {
        setItems(hits);
        setLoading(false);
        setIsLoaded(true);
        setNotice(false);
        setResponsePage(responsePage + 1);
      });
  };

  const handleNextPageFetch = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(({ hits }) => {
        setItems(items.concat(hits));
        setLoading(false);
        setResponsePage(responsePage + 1);
      });
  };

  const handleQueryChange = (value) => {
    setQuery(value);
  };

  const handleResetPage = () => {
    setResponsePage(1);
  };

  const handleHomeButton = () => {
    setQuery("");
    setResponsePage(1);
    setItems([]);
    setLoading(false);
    setIsLoaded(false);
  };

  return (
    <React.Fragment>
      <Header
        inputValue={query}
        onQueryChange={handleQueryChange}
        onMakeQuery={handleMakeFetch}
        handleResetPage={handleResetPage}
        handleHomeButton={handleHomeButton}
      />
      <MainContainer
        loading={loading}
        isLoaded={isLoaded}
        items={items}
        handleNextPageFetch={handleNextPageFetch}
        notice={notice}
      />
      <UpToSearchButton items={items} isLoaded={isLoaded} />
      <Footer />
    </React.Fragment>
  );
}

export { App };
