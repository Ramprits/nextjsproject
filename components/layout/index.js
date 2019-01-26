import React from "react";
import "./main.scss";
import Nav from "../nav";
const index = props => {
  return (
    <React.Fragment>
      <Nav />
      <main className="container mt-3">{props.children}</main>
    </React.Fragment>
  );
};

export default index;
