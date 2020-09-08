import React from "react"

function Home() {
    const userDetails = React.useContext(CurrentUserContext);

    return <h1>hello, {userDetails}!</h1>
}

export default Home
