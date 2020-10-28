import React from "react";
import styled from "styled-components";
import Borders from "./Borders";

const CountryShow = (props) => {
  const currentCountry = props.countries.filter((country) => {
    return country.name.includes(props.match.params.name);
  });

  const borderName = () => {
    const borderArray = currentCountry[0].borders;
    return props.countries
      .filter((country) => {
        return borderArray
          ? borderArray.indexOf(country.alpha3Code) !== -1
          : [];
      })
      .map((country) => country.name);
  };

  if (!currentCountry[0]) {
    return <div>loading country</div>;
  } else
    return (
      <React.Fragment>
        <button className="back-button" onClick={() => props.history.goBack()}>
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
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          back
        </button>
        <CountryDetail key={currentCountry[0].name}>
          <ImageContainer
            style={{ backgroundImage: `url(${currentCountry[0].flag})` }}
          ></ImageContainer>

          <DetailContainer>
            <h3>{currentCountry[0].name}</h3>

            <Details>
              <ul>
                <li>
                  <span>Name: </span>
                  {currentCountry[0].nativeName}
                </li>
                <li>
                  <span>Population: </span>
                  {currentCountry[0].population.toLocaleString()}
                </li>
                <li>
                  <span>Region: </span>
                  {currentCountry[0].region}
                </li>
                <li>
                  <span>Sub Region: </span>
                  {currentCountry[0].subregion}
                </li>
                <li>
                  <span>Capital: </span>
                  {currentCountry[0].capital}
                </li>
              </ul>

              <ul>
                <li>
                  <span>Top level domain: </span>
                  {currentCountry[0].topLevelDomain}
                </li>
                <li>
                  <span>Currency: </span>
                  {currentCountry[0].currencies[0].name}
                </li>
                <li>
                  <span>Languages: </span>
                  {currentCountry[0].languages[0].name}
                </li>
              </ul>
            </Details>

            <Borders countries={currentCountry[0]} borderNames={borderName} />
          </DetailContainer>
        </CountryDetail>
      </React.Fragment>
    );
};

export default CountryShow;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-width: 250px;
  min-height: 250px;
`;

const CountryDetail = styled.div`
  display: flex;
  margin: 0 5rem;
  flex-wrap: wrap;
  @media (max-width: 1032px) {
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  ul {
    display: flex;
    padding: 0;

    li {
      list-style: none;
      span {
        font-weight: 600;
      }
    }
  }
`;

const Details = styled.div`
  display: flex;

  @media (max-width: 1032px) {
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
  }
`;

const DetailContainer = styled.div`
  flex: 1;
  padding: 2rem;
  padding-left: 5rem;

  @media (max-width: 768px) {
    padding-left: 0rem;
  }
`;
