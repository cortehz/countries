import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ name, flag, capital, population, region }) => {
  return (
    <Link to={`/countries/${name}`} style={{ textDecoration: "none" }}>
      <CardContainer>
        <Cards>
          <Flag
            className="card-image"
            style={{
              backgroundImage: `url(${flag})`,
            }}
          ></Flag>

          <Country className="country-detail">
            <h2>{name}</h2>
            <ul>
              <li className="detail-list">
                <span>Population: </span>
                {population.toLocaleString()}
              </li>
              <li className="detail-list">
                <span>Region: </span>
                {region}
              </li>
              <li className="detail-list">
                <span>Capital: </span>
                {capital}
              </li>
            </ul>
          </Country>
        </Cards>
      </CardContainer>
    </Link>
  );
};

export default Card;

const Flag = styled.div`
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: center center;
  border-top-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CardContainer = styled.div`
  background: ${({ theme }) => theme.background};
  display: flex;
  margin-bottom: 4rem;
  margin: 2rem;
  color: ${({ theme }) => theme.text};
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px -14px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  &:visited{
    color: ${({ theme }) => theme.text};
  }
}
`;

const Cards = styled.div`
  width: 100%;
`;

const Country = styled.div`
  padding: 0.8rem;
  ul {
    padding: 0;
    li {
      list-style: none;

      span {
        font-weight: 800;
      }
    }
  }
`;
