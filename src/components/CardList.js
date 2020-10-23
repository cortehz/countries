import React from "react";
import Card from "./Card";

const CardList = ({ countries }) => {
  return (
    <div className="card-list">
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
    </div>
  );
};

export default CardList;
