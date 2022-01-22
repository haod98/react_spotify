import React from "react";
import PrimaryLink from "../PrimaryLink";
import { authentication } from "../../helpers/authentication"

function Hero() {
    return (
        <div>
            <h1 className="heroHeader">Get your personal Spotify charts</h1>
            <p className="heroText">Just log in</p>
            <PrimaryLink desc="Login" link={authentication()} />
        </div>
    )
}

export default Hero;