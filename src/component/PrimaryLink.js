import React from "react";

function PrimaryLink(props) {
    console.log(props);
    return <a className="border border-primary bg-primary py-3 px-5 rounded-lg text-secondary uppercase text-xl font-bold" href={props.link}>{props.desc}</a>
}

export default PrimaryLink