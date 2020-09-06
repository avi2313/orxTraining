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
    const user = localStorage.getItem("currentOpenSaucedUser");
    if (user) {
      setUser({ user: JSON.parse(user) });
    } else {
      loginUser();
    }
    netlifyIdentity.on("login", (user) => setUser({ user }, loginUser()));
    netlifyIdentity.on("logout", (user) => setUser({ user: null }, logoutUser()));
  });

  function handleLogIn() {
    netlifyIdentity.open();
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

export function loginUser() {
  if (netlifyIdentity && netlifyIdentity.currentUser()) {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata
    } = netlifyIdentity.currentUser();

    localStorage.setItem(
      "currentOpenSaucedUser",
      JSON.stringify({ ...app_metadata, created_at, confirmed_at, email, id, ...user_metadata })
    );
  }
}

export function logoutUser() {
  localStorage.removeItem("currentOpenSaucedUser");
}

export default App;
