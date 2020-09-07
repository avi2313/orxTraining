import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import { Route, Switch , Redirect } from "react-router-dom"
import styled from "styled-components"
import netlifyIdentity from 'netlify-identity-widget'

function App() {
  const ThemeContext = React.createContext('user');

  const Main = styled.div`
  display: flex;
  align-items: center;`

  useEffect(() => {
    // Update the document title using the browser API
  });

  

  return (
    <ThemeContext.Provider value={"Day"}>
    <Main>
      <span>{netlifyIdentity.currentUser() ? netlifyIdentity.currentUser() : "please login"}</span>
      <NavBar />
      <div>
        <Switch>
          <Route path="/" component={Home} exact>
            {netlifyIdentity.currentUser() ? <Redirect to="/about" /> : <Home />}
          </Route>
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Main>
    </ThemeContext.Provider>
  );
}

export default App;
