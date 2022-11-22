import { useQuery } from "react-query";
import React from "react";
import useDebounce from "../utils/useDebounce";
import searchPokemons from "../utils/searchPokemon";
import PokemonsSearchResult from "../components/PokemonSearchResult";

export default function IndexPage() {
  const [searchValue, setSearchValue] = React.useState("");
  const debounedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchPokemons", debounedSearchValue],
    () => searchPokemons(debounedSearchValue),
    {
      enabled: debounedSearchValue.length > 0
    }
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className="search-message"> Loading... </div>;
    }

    if (isError) {
      return <div className="search-message"> Something went wrong </div>;
    }

    if (isSuccess) {
      return <PokemonsSearchResult pokemons={data} />;
    }

    return <></>;
  };

  return (
    <div className="home">
      <h1>Search Your Pokemon</h1>
      <input
        type="text"
        onChange={({ target: { value } }) => setSearchValue(value)}
        value={searchValue}
      />
      {renderResult()}
    </div>
  );
}
