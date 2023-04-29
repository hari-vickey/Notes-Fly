import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
  <div className="error">
    <h1 className="display-4">Oh, No.</h1>
    <p className="lead">We ran into a problem. Please try again!</p>
    <div className="btn btn-lg"
    onClick={() => {
      navigate('/register');
    }} >Try Again</div>
  </div>
  );
}