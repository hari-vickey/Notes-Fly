import React from 'react';

export default function Image(props) {
  return (
    <img alt={props.label} src={props.src} width={props.width}/>
  );
}