import React from "react";

function PrimaryLink(props) {
    console.log(props);
    return <a className="primaryLink" href={props.link}>{props.desc}</a>
}

export default PrimaryLink