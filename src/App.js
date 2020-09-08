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
  const [userName, setUserName] = useState({name:'name'});


  // const currentUserContext = React.createContext("I");

  useEffect(() => {
    // Update the document title using the browser API
    netlifyIdentity.init();

    // loginUser();

    netlifyIdentity.on("login", (user) => {console.log(user);setUserName(user);});
    netlifyIdentity.on("logout", (user) => setUserName({name:'name'}));
},[]);




  return (
    // <currentUserContext.Provider value={userName}>
      <Main>
        <span>{JSON.stringify(userName)}</span>
        <NavBar />
        <div>
          <Switch>
            <Route path="/login" component={() => <Login updateLogin={setUserName} />} />
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
    // </currentUserContext.Provider>
  );
}

export default App;


const WithAuthWrapper = ({ children }) => {
  if (netlifyIdentity.currentUser()) {
    return children;
  }
  return <Redirect to="/login" />
}

const Main = styled.div`
display: flex;
align-items: center;`;