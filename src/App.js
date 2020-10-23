import React, { useEffect, useState } from "react";
import { Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryShow from "./components/CountryShow";

import history from "./history";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [state, setState] = useState([]);

  useEffect(() => {
    // code to run on component mount
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((countries) => {
        setState(countries);
      });
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <Router history={history}>
        <GlobalStyles />
        <div className="App">
          <Header theme={theme} themeToggler={themeToggler} />
          <Route path="/" exact render={() => <Home countries={state} />} />
          <Route
            path="/countries/:name"
            exact
            render={(props) => <CountryShow {...props} countries={state} />}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
