import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import RegionDrop from "../components/RegionDrop";
import CardList from "../components/CardList";
import styled from "styled-components";

const Home = ({ countries }) => {
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
      <Filter>
        <SearchBox searchChange={onSearchChange} />
        <RegionDrop regionSearch={handleRegionChange} />
      </Filter>
      <CardList countries={filterCountryByRegion} />
    </React.Fragment>
  );
};

export default Home;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 5rem;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1032px) {
    .filter {
      margin: 2rem 2rem;
    }
  }
`;
