import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button(props) {
  const navigate = useNavigate();
  return(
    <div className={'btn btn-lg ' + props.class} onClick={() => {
      navigate(props.link);
    }}>{props.label}</div>
  );
}