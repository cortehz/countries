import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Borders = ({ countries, borderNames }) => {
  return (
    <BorderList className="borders">
      <p>Borders:</p>
      <ul>
        {countries.borders.length !== 0 ? (
          borderNames().map((name) => {
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
    </BorderList>
  );
};

export default Borders;

const BorderList = styled.div`
  display: flex;
  p {
    margin-right: 10px;
  }
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    li {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      padding: 0.5rem 1rem;
      margin-bottom: 10px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px -14px;
      margin-right: 10px;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
        &:visited {
          color: ${({ theme }) => theme.text};
        }
      }
    }
  }
`;
