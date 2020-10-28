import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Nunito Sans, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.20s ease-in-out;
  }
  
.back-button {
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  margin: 3rem 5rem;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border: 0;
}

@media (max-width: 1032px) {
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
