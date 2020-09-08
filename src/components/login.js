import React, { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget'

function Login(props) {

    function handleLogIn() {
        netlifyIdentity.open();
        
    }

    function loginUser() {
        props.updateLogin(netlifyIdentity.currentUser().user_metadata.full_name);
    }

    function logoutUser() {
        props.updateLogin(null);
    }

    useEffect(() => {
        // Update the document title using the browser API
        netlifyIdentity.init();

        // loginUser();

        netlifyIdentity.on("login", () => loginUser());
        netlifyIdentity.on("logout", () => logoutUser());
    });

    return (
        <currentUserContext.Consumer>
        {(currentUser) => (
          <button onClick={handleLogIn} >Log in with netlify</button>
          <h1>{currentUser}</h1>
        )}
      </currentUserContext.Consumer>
      )
}

export default Login