import React from "react";
import { Link } from "react-router-dom";

import NavigationNormal from "./NavigationNormal";
import NavigationMobile from "./NavigationMobile";
import "./navigation.style.css";

// Main navigation page import to App.js
function Navigation(props) {
  return (
    <nav className="navigation">
      <Link className="logoAndNameNav" to="/">
        {/* <h2 className="logoRV">CT</h2> */}
        <h3>Copywriting Tomečková</h3>
      </Link>
     
<p></p>
      {/* <NavigationNormal /> */}
      {/* <NavigationMobile /> */}
    </nav>
  );
}

export default Navigation;
