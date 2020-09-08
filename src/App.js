import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/login';
import Shop from './components/shop';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import { Route, Switch, Redirect } from "react-router-dom"
import styled from "styled-components"
import netlifyIdentity from 'netlify-identity-widget'

function App() {
  const currentUser = React.createContext({user: "I", setUser: () => {}});

  const Main = styled.div`
  display: flex;
  align-items: center;`

  useEffect(() => {
    // Update the document title using the browser API
  });



  return (
    <currentUser.Provider value={"Day"}>
      <Main>
        <span>{netlifyIdentity.currentUser() ? netlifyIdentity.currentUser() : "please login"}</span>
        <NavBar />
        <div>
          <Switch>
            <Route path="/login" component={Login} />
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
    </currentUser.Provider>
  );
}

export default App;


const WithAuthWrapper = ({ children }) => {
  if (netlifyIdentity.currentUser()) {
    return children;
  }
  return <Redirect to="/login" />
}