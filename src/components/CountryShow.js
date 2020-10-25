import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  if (!Array.isArray(currentCountry)) {
    return <div>loading country</div>;
  } else
    return (
      <>
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
                  <strong>Name: </strong>
                  {currentCountry[0].nativeName}
                </li>
                <li>
                  <strong>Population: </strong>
                  {currentCountry[0].population.toLocaleString()}
                </li>
                <li>
                  <strong>Region: </strong>
                  {currentCountry[0].region}
                </li>
                <li>
                  <strong>Sub Region: </strong>
                  {currentCountry[0].subregion}
                </li>
                <li>
                  <strong>Capital: </strong>
                  {currentCountry[0].capital}
                </li>
              </ul>

              <ul>
                <li>
                  <strong>Top level domain: </strong>
                  {currentCountry[0].topLevelDomain}
                </li>
                <li>
                  <strong>Currency: </strong>
                  {currentCountry[0].currencies[0].name}
                </li>
                <li>
                  <strong>Languages: </strong>
                  {currentCountry[0].languages[0].name}
                </li>
              </ul>
            </Details>

            <div className="borders">
              <p>Borders:</p>
              <ul>
                {currentCountry[0].borders.length !== 0 ? (
                  borderName().map((name) => {
                    return (
                      <li className="border-country" key={name}>
                        <Link to={`/countries/${name}`}>{name}</Link>
                      </li>
                    );
                  })
                ) : (
                  <li>None</li>
                )}
              </ul>
            </div>
          </DetailContainer>
        </CountryDetail>
      </>
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
