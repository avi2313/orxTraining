import React from "react"
import {currentUserContext} from "../App"

function Home() {
    const userDetails = React.useContext(currentUserContext);

    return (
        <currentUserContext.Consumer>
            {userDetails => <h1>hello, {userDetails}!</h1>}
        </currentUserContext.Consumer>
    )
}

export default Home
