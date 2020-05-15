import React, { Component } from "react";
import { Section, StyledButton } from "../Components";
import "./introduction.css";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div align="center">
        <div className="sectionHeading">{`We <3 people who code`}</div>
        <div className="subHeading">
          We build products that empower developers and connect them to
          solutions that enable productivity, growth, and discovery.
        </div>
        <div classname="section1Button">
          <StyledButton developer> For Developers</StyledButton>
          <StyledButton> For Buisness</StyledButton>
        </div>
      </div>
    );
  }
}

export default Introduction;
