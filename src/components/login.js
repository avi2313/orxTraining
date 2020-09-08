import React, { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget'

function Login({updateLogin}) {

    // const currentUserContext = React.createContext("I");

    const handleLogIn = () => {
        netlifyIdentity.open();
    }

    function loginUser() {
        if (netlifyIdentity && netlifyIdentity.currentUser()) {
            updateLogin(netlifyIdentity.currentUser());
        }
    }

    function logoutUser() {
        updateLogin("no one");
    }

    useEffect(() => {
        // Update the document title using the browser API
        netlifyIdentity.init();

        // loginUser();

        netlifyIdentity.on("login", (user) => loginUser());
        netlifyIdentity.on("logout", (user) => logoutUser());
    },[]);

    return (
        // <currentUserContext.Consumer>
        //     {(currentUser) => (
                <div>
                    <button onClick={handleLogIn} >Log in with netlify</button>
                    <h1>{user}</h1>
                </div>
        //     )}
        // </currentUserContext.Consumer>
    )
}

export default Login