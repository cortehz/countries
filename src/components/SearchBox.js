import React from "react";
import styled from "styled-components";

const SearchBox = ({ searchChange }) => {
  return (
    <Search className="search-box">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search for a Country"
        onChange={searchChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </Search>
  );
};

export default SearchBox;

const Search = styled.div`
  position: relative;
  width: 30%;

  input {
    width: 100%;
    padding: 1rem;
    padding-left: 3rem;
    border: 0;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px -14px;

    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }

  svg {
    position: absolute;
    left: 1rem;
    top: 25%;
  }

  @media (max-width: 660px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
