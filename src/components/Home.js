import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import RegionDrop from "../components/RegionDrop";
import CardList from "../components/CardList";

const Home = ({ countries }) => {
  // const [state, setState] = useState({ countries: [], searchfield: "" });
  const [region, setRegion] = useState("");
  const [search, setSearchField] = useState("");
  const filteredCountries = countries.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  const filterCountryByRegion = filteredCountries.filter((country) => {
    return country.region.includes(region);
  });
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  if (!countries.length) return <div>loading...</div>;

  return (
    <React.Fragment>
      <div className="filter">
        <SearchBox searchChange={onSearchChange} />
        <RegionDrop regionSearch={handleRegionChange} />
      </div>
      <CardList countries={filterCountryByRegion} />
    </React.Fragment>
  );
};

export default Home;
