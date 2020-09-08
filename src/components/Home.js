import React from "react"
import { currentUserContext } from "../App"

function Home() {
    const userDetails = React.useContext(currentUserContext);

    return (
        <div>
            <currentUserContext.Consumer>
                {(userDetails) => <h1>hello, {userDetails}!</h1>}
            </currentUserContext.Consumer>
        </div>
    )
}

export default Home
