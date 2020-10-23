import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ name, flag, capital, population, region }) => {
  return (
    <Link
      className="cardBody"
      to={`/countries/${name}`}
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(${flag})`,
          }}
        ></div>

        <Country className="country-detail">
          <h2>{name}</h2>
          <ul>
            <li className="detail-list">
              <strong>Population: </strong>
              {population.toLocaleString()}
            </li>
            <li className="detail-list">
              <strong>Region: </strong>
              {region}
            </li>
            <li className="detail-list">
              <strong>Capital: </strong>
              {capital}
            </li>
          </ul>
        </Country>
      </div>
    </Link>
  );
};

export default Card;

const Country = styled.div`
  padding: 0.8rem;
  ul {
    padding: 0;
    li {
      list-style: none;
    }
  }
`;
