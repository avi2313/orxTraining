import React from 'react';
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
  align-items: center;
`

  const Routes = styled.div`
`

function handleLogIn () {
  netlifyIdentity.init();
  netlifyIdentity.open();
}

  return (
    <Main>
      <button onClick={handleLogIn} >Log in with netlify</button>
      <NavBar />
      <Routes>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </Routes>
    </Main>
  );
}

export default App;
