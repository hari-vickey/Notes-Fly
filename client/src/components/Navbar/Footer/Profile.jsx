import React from "react";

export default function Profile(props) {
  return (
    <span className="brands">
      <a aria-label={props.label} href={props.link}>
        <i className={props.class}></i>
      </a>
    </span>
  );
}