import React from "react";
import PrimaryLink from "../PrimaryLink";
import './landingPage.css';
import authRedirect from "../../helpers/authRedirect"

function Hero() {
    return (
        <div>
            <h1 className="heroHeader">Get your personal Spotify charts</h1>
            <p className="heroText">Just log in</p>
            <PrimaryLink desc="Login" link={authRedirect()} />
        </div>
    )
}

export default Hero;