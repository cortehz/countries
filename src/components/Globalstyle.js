import {
  createGlobalStyle
} from "styled-components"

export const GlobalStyles = createGlobalStyle `
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Nunito Sans, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.20s ease-in-out;
  }


  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 5rem;
    background: ${({ theme }) => theme.background};

    a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 800;

    &:visited{
      color: ${({ theme }) => theme.text};
    }
    }
  }


  .filter {
   display: flex;
   justify-content: space-between;
   margin: 2rem 5rem;
   flex-wrap: wrap;
   align-items:center
  }


  .search-box{
    position: relative;
    width: 30%;
    input{
      width: 100%;
      padding: 1rem;
      padding-left: 3rem;
      border:0;
      color: ${({ theme }) => theme.text};
      background: ${({ theme }) => theme.background};
      box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px -14px;
      ::placeholder{
        color: ${({ theme }) => theme.text};
      }
    }

    svg {
      position: absolute;
      left: 1rem;
      top: 25%
    }
  }

  .card-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 3rem;
    padding: 0;
  }

  .card{
    width: 100%;
  }

  .card-image{
    width: 100%;
    height: 150px;
    background-size: cover;
    background-position: center center;
    border-top-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .cardBody{
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


  .borders{ 
    display: flex;
    p  {
      margin-right: 10px;
    }
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      li {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      padding: .5rem 1rem;
      margin-bottom: 10px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px -14px;
      margin-right:10px;
     

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
         &:visited {
        color: ${({ theme }) => theme.text};
        }
       }
      }
    }
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
    nav {
      padding: 1rem 2rem;
      a {
       font-size: 1.5rem;
      }
    }

    .card-list{
    margin: 0 .8rem;
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


  @media (max-width: 660px) {

    nav {
      a {
       font-size: 1rem;
      }
    }

    .card-list{
      justify-content: center;
    }

    .search-box{
      width: 100%;
      margin-bottom: 20px;
    }
  }
  `