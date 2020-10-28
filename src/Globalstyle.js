import { createGlobalStyle } from "styled-components";

const bodyBackground = ({ theme }) => {
  return theme.body;
};

const cardBackground = ({ theme }) => {
  return theme.background;
};

const textColor = ({ theme }) => {
  return theme.text;
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${bodyBackground};
    color: ${textColor};
    font-family: Nunito Sans, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.20s ease-in-out;
  }
  
.back-button {
  color: ${textColor};
  background: ${cardBackground};
  margin: 3rem 5rem;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border: 0;
}


@media (max-width: 1032px) {
    nav {
      padding: 1rem 2rem;
      a {
       font-size: 1.5rem;
      }
    }

  .filter{
   margin: 2rem 2rem;
    }

  .back-button {
  margin: 3rem 2rem;
    }

    .borders{ 
      flex-wrap: wrap;
    }
  }
  `;
