import React, { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget'

function AboutUs() {

    function handleLogIn() {
        netlifyIdentity.open();
    }

    // function logoutUser() {
    //     setUser(null);
    // }

    useEffect(() => {
        // Update the document title using the browser API
        netlifyIdentity.init();

        // loginUser();

        // netlifyIdentity.on("login", () => loginUser());
        // netlifyIdentity.on("logout", () => logoutUser());
    });


    return (
        <div>
            <button onClick={handleLogIn} >Log in with netlify</button>
            <h1>About Us</h1>
        </div>)
}

export default AboutUs