import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../index";
import "./card.css";
import Paper from "@material-ui/core/Paper";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  handleShadow = (id) => {
    this.setState({
      id: id,
    });
  };

  render() {
    return (
      <>
        <Paper
          className="card"
          onMouseOver={() => this.handleShadow(this.props.number)}
          style={{
            marginBottom: this.props.number == 1 ? "150px" : "0px",
            // boxShadow:
            //   this.state.id == this.props.number
            //     ? "5px 5px 15px rgba(0, 0, 0, 0.15)"
            //     : "none",
          }}
        >
          <div>
            <img src={this.props.img} />
            <div style={{ margin: "5%", fontSize: "1.2em", fontWeight: "500" }}>
              {this.props.title}
            </div>
            <div
              style={{
                textAlign: "center",
                margin: "3%",
                fontSize: "0.9em",
                opacity: "0.8",
              }}
            >
              {this.props.message}
            </div>
            <Button
              style={{ marginTop: "5%" }}
              primary={!(this.props.title.indexOf("Private") > -1)}
            >
              {this.props.action}
            </Button>
          </div>
        </Paper>
      </>
    );
  }
}

export default Card;
