import React from "react";

function Reference(props) {
  return (
    <a className="col" aria-label={props.label} href={props.link}><i className={props.class}></i></a>
  );
}

export default Reference;