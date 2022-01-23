import React from "react";
import PrimaryLink from "../PrimaryLink";
import { authentication } from "../../helpers/authentication"

function Hero() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="font-heading uppercase text-primary text-6xl mb-3 text-center">Get your personal Spotify charts</h1>
            <PrimaryLink desc="Login" link={authentication()} />
        </div>
    )
}

export default Hero;