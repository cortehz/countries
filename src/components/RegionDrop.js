import React from "react";
import styled from "styled-components";

const RegionDrop = ({ regionSearch }) => {
  return (
    <Dropdown defaultValue={"DEFAULT"} onChange={regionSearch}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Dropdown>
  );
};

const Dropdown = styled.select`
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  color: var(--color-text);
  background-color: var(--color-gray700);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px -14px;
  min-width: 150px;
`;

export default RegionDrop;
