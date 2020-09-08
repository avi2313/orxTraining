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
  const [userMail, setUserMail] = useState({name:'name'});

  const CurrentUserContext = createContext(undefined);

  useEffect(() => {
    netlifyIdentity.init();

    if(netlifyIdentity.currentUser()){
      setUserMail(netlifyIdentity.currentUser().email);
    }

    // loginUser();

    netlifyIdentity.on("login", (user) => setUserMail(user.email));
    netlifyIdentity.on("logout", (user) => setUserMail({name:'name'}));
},[]);




  return (
    <CurrentUserContext.Provider value={userMail}>
      <Main>
        <span>{JSON.stringify(userMail)}</span>
        <NavBar />
        <div>
          <Switch>
            <Route path="/login" component={() => <Login updateLogin={setUserMail} />} />
            <WithAuthWrapper userName={userMail}>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route component={PageNotFound} />
              </Switch>
            </WithAuthWrapper>
          </Switch>
        </div>
      </Main>
    </CurrentUserContext.Provider>
  );
}

export default App;


const WithAuthWrapper = ({ children,userName }) => {
  if (userName) {
    return children;
  }
  return <Redirect to="/login" />
}

const Main = styled.div`
display: flex;
align-items: center;`;