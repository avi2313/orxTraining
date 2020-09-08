import React, { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget'

function Login(props) {

    const currentUserContext = React.createContext("I");

    function handleLogIn() {
        netlifyIdentity.open();

    }

    function loginUser() {
        if (netlifyIdentity && netlifyIdentity.currentUser()) {
            const {
              app_metadata, created_at, confirmed_at, email, id, user_metadata
            } = netlifyIdentity.currentUser();
            props.updateLogin(user_metadata);
        }
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
                <div>
                    <button onClick={handleLogIn} >Log in with netlify</button>
                    <h1>{currentUser}</h1>
                </div>
            )}
        </currentUserContext.Consumer>
    )
}

export default Login