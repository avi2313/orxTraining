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

const currentUserContext = React.createContext(undefined);

function App() {
  const [userMail, setUserMail] = useState(undefined);

  useEffect(() => {
    netlifyIdentity.init();

    if(netlifyIdentity.currentUser()){
      setUserMail(netlifyIdentity.currentUser().email);
    }

    // loginUser();

    netlifyIdentity.on("login", (user) => setUserMail(user));
    netlifyIdentity.on("logout", (user) => setUserMail(undefined));
},[]);




  return (
    <currentUserContext.Provider value={userMail}>
      <Main>
        <span>{userMail}</span>
        <NavBar />
        <div>
          <Switch>
            <Route path="/login" component={() => <Login updateLogin={setUserMail} />} />
            <WithAuthWrapper user={userMail}>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route component={PageNotFound} />
              </Switch>
            </WithAuthWrapper>
          </Switch>
        </div>
      </Main>
    </currentUserContext.Provider>
  );
}

export default App;
export {currentUserContext};


const WithAuthWrapper = ({ children,user }) => {
  if (user) {
    return children;
  }
  return <Redirect to="/login" />
}

const Main = styled.div`
display: flex;
align-items: center;`;