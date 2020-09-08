import React, { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget'

function Login(props) {

    // const currentUserContext = React.createContext("I");

    const [user,setUser] = useState("me");

    function handleLogIn(user) {
        netlifyIdentity.open();

    }

    function loginUser(user) {
        if (netlifyIdentity && netlifyIdentity.currentUser()) {
            const {
              app_metadata, created_at, confirmed_at, email, id, user_metadata
            } = netlifyIdentity.currentUser();
            props.updateLogin(user_metadata);
            setUser(user_metadata);
        }
    }

    function logoutUser() {
        props.updateLogin("no one");
        setUser("no one");
    }

    useEffect(() => {
        // Update the document title using the browser API
        netlifyIdentity.init();

        // loginUser();

        netlifyIdentity.on("login", (user) => loginUser(user));
        netlifyIdentity.on("logout", (user) => logoutUser(user));
    });

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