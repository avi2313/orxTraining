import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/shop';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import { Route, Switch, Redirect } from "react-router-dom"
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
            <Route path="/about" component={About} />
            <WithAuthWrapper>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route component={PageNotFound} />
              </Switch>
            </WithAuthWrapper>
          </Switch>
        </div>
      </Main>
    </ThemeContext.Provider>
  );
}

export default App;


const WithAuthWrapper = ({ children }) => {
  if (netlifyIdentity.currentUser()) {
    return children;
  }
  return <Redirect to="/about" />
}


const ShopPrivateRoute = () => {
  return <Shop />;
}
