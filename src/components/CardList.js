import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardList = ({ countries }) => {
  return (
    <CardsContainer className="card-list">
      {countries.map((country, i) => {
        return (
          <Card
            key={i}
            name={country.name}
            flag={country.flag}
            capital={country.capital}
            region={country.region}
            population={country.population}
          />
        );
      })}
    </CardsContainer>
  );
};

export default CardList;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 3rem;
  padding: 0;
  @media (max-width: 1032px) {
    .card-list {
      margin: 0 0.8rem;
    }
  }

  @media (max-width: 660px) {
    .card-list {
      justify-content: center;
    }
  }
`;
