import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import { Route, Switch } from "react-router-dom"
import styled from "styled-components"
import netlifyIdentity from 'netlify-identity-widget'

function App() {

  const Main = styled.div`
  display: flex;
  align-items: center;`

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    netlifyIdentity.init();
    netlifyIdentity.on("login", () => loginUser());
    netlifyIdentity.on("logout", () => logoutUser());
  });

  function handleLogIn() {
    netlifyIdentity.open();
  }

  function loginUser() {
    if (netlifyIdentity && netlifyIdentity.currentUser()) {
      const {
        app_metadata, created_at, confirmed_at, email, id, user_metadata
      } = netlifyIdentity.currentUser();
  
      setUser(
        JSON.stringify({ ...app_metadata, created_at, confirmed_at, email, id, ...user_metadata })
      );
    }
  }
  
  function logoutUser() {
    setUser(null);
  }

  return (
    <Main>
      <span>{user}</span>
      <button onClick={handleLogIn} >Log in with netlify</button>
      <NavBar />
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Main>
  );
}

export default App;
