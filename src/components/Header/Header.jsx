import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand my-navbar">
      {/* <img className="icon-img" src="images/profile.png" alt="Home-Page" width="80"> */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Notes Fly</a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="/">Help</a></li>
          <li className="nav-item"><a className="nav-link" href="/">Login</a></li>
          </ul>
      </div>
    </nav>
  );
}

export default Header;