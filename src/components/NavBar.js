import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

function Navbar() {
    const Bar = styled.div`
        width:10em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        flex: 1;
      `

    return (
        <Bar>
            <Link to="/home">Home </Link>
            <Link to="/about">About Us </Link>
            <Link to="/shop">Shop Now </Link>
        </Bar>
    );
};

export default Navbar;
