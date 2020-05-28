import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../index";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // flex: 1,
            width: "100%",
            height: "100%",
            maxWidth: this.props.fifth ? "250px" : "325px",
            maxHeight: this.props.fifth ? "90px" : "150px",
            padding: "1%",
            borderRadius: "10px",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.15)",
            justifyContent: "space-evenly",
            alignItems: "center",
            background: "#fff",
            marginBottom:"5%"
          }}
        >
          <div style={{ display: "flex", flex: 0.3 }}>
            <img
              style={{ width: "50px", height: "50px" }}
              src={this.props.img}
            />
          </div>
          <div style={{ display: "flex", flex: 0.7, textAlign: "left", fontSize:"0.9em" }}>
            {this.props.message}
          </div>
        </div>
      </>
    );
  }
}

export default Tab;
// require("../../assets/public.svg")
