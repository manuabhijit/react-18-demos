import React from "react";
import { Link } from "react-router-dom";


function HeaderTwoComponent() {
  return (
    <div className="header-component">  
      header: &nbsp; &nbsp; &nbsp;
      <Link to='/home'>Home</Link> &nbsp; &nbsp; &nbsp;
      <Link to='/about-us'>aboutUs</Link>
    </div>
  );
}

export default HeaderTwoComponent;