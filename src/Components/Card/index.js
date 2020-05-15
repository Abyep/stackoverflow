import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../index";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div
         className="card"
          style={{
            marginBottom: this.props.number == 1 ? "150px" : "0px",
          }}
         
        >
          <div>
            <img src={this.props.img} />
            <div style={{ margin: "5%", fontSize: "1.2em", fontWeight: "500" }}>
              {this.props.title}
            </div>
            <div style={{ textAlign: "center", margin: "5%", fontSize: "1em" }}>
              {this.props.message}
            </div>
            <Button primary={!(this.props.title.indexOf("Private") > -1)}>
              {this.props.action}
            </Button>
          </div>
        </div>
    
      </>
    );
  }
}

export default Card;
