import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../Components/index";
import "./learn.css";

const learn = [
  {
    id: 0,
    img: require("../assets/developer.svg"),
    title: "Write the script of the future",
    message:
      "Get your coding questions answered to learn, build, and level up whether you’re beginning with JavaScript or a React professional.",
  },
  {
    id: 1,
    img: require("../assets/open-source.svg"),
    title: "Support open source",
    message:
      "Reach users of your project by following tags, answering newcomer questions, and empowering experts in the community. Read the curl project creator’s story.",
  },
  {
    id: 2,
    img: require("../assets/advocate.svg"),
    title: "Acquire and share knowledge",
    message:
      "Answer questions and gain insights from an audience of developers using your technology on Stack Overflow.",
  },
  {
    id: 3,
    img: require("../assets/career-switcher.svg"),
    title: "Find career opportunities",
    message:
      "Create a profile that shows off your expertise and credentials to help you make your next move. Start your Developer Story.",
  },
];

class Learn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div
          style={{ fontSize: "2.2em", fontWeight: "bold" }}
        >{`Learn and grow with Stack Overflow`}</div>
        <div className="learnSection">
          {learn.map((card, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                width: "100%",
                height: "100%",
                maxWidth: "402px",
                maxHeight: "284px",
                padding: "32px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{ marginBottom: this.props.key == 1 ? "20vh" : "0px" }}
              >
                <div align="left">
                  <img  src={card.img} />
                </div>
                <div
                  style={{
                    textAlign: "left",
                    margin: "5%",
                    fontSize: "1.1em",
                    fontWeight: "500",
                    fontWeight: "bold",
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{ textAlign: "left", margin: "5%", fontSize: "0.9em", opacity:0.8 ,width : "300px"}}
                >
                  {card.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Learn;
