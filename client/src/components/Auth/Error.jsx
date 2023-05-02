import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Error() {
  const location = useLocation();
  const {data} = location.state;
  const navigate = useNavigate();
  return (
  <div className="error">
    <h1 className="display-4">Sorry</h1>
    <p className="lead">We ran into a problem. Please try again!</p>
    <div className="btn btn-lg"
    onClick={() => {
      navigate(data);
    }} >Try Again</div>
  </div>
  );
}