import React, { Component } from "react";
import { Button } from "../Components";
import "./animation.css";

const left = [
  {
    number: 0,
    img: require("../assets/ask.svg"),
    title: "Ask a question",
    message:
      "Ask a question publicly on 170+ Stack Exchange sites or privately using Stack Overflow for Teams.",
  },
  {
    number: 1,
    img: require("../assets/vote.svg"),
    title: "Vote on evrything",
    message:
      "Upvoting helps exceptional content rise to the top and bring awareness to useful responses.",
  },
  {
    number: 2,
    img: require("../assets/answer.svg"),
    title: "Answer questions",
    message:
      "Answer a question to share your knowledge with the world or in private with your team.",
  },
  {
    number: 3,
    img: require("../assets/tags.svg"),
    title: "Tag your question",
    message:
      "Tags help make information searchable and find answers that are important to you.",
  },
  {
    number: 4,
    img: require("../assets/accept.svg"),
    title: "Accept an answer",
    message:
      "Accept the answer which solved your problem to let others benefit from the valuable information.",
  },
  {
    number: 5,
    img: require("../assets/recognize.svg"),
    title: "Get recognized",
    message:
      "Our reputation system rewards both the new & experienced based on contribution and activity.",
  },
];

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      image: require("../assets/ask.svg"),
      message:
        "Ask a question publicly on 170+ Stack Exchange sites or privately using Stack Overflow for Teams.",
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let number = this.state.number;
      this.setState({
        image: left[number].img,
        number: this.state.number < 5 ? number + 1 : 0,
        message: left[number].message,
      });
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleAnimate = (number) => {
    this.setState({
      number: number,
      image: left[number].img,
      message: left[number].message,
    });
  };

  handleMouseOver = (number) => {
    this.setState({
      number: number,
    });
  };

  render() {
    return (
      <>
        <div>
          <div
            style={{
              fontSize: "2em",
              fontWeight: "bold",
              lineHeight: "40px",
              width: "100%",
              marginBottom: "2%",
              // height: "200px",
            }}
          >{`   Questions are everywhere, answers are on Stack Overflow`}</div>

          <div
            align="center"
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                flex: 0.2,
              }}
            >
              {left.map((item) =>
                item.number !== 3 && item.number !== 4 && item.number !== 5 ? (
                  <div
                    onMouseOver={() => this.handleMouseOver(item.number)}
                    style={{
                      padding: "4%",
                      width: " 200px",
                      boxShadow:
                        this.state.number == item.number
                          ? "5px 5px 15px rgba(0, 0, 0, 0.15)"
                          : "none",
                    }}
                    onClick={() => this.handleAnimate(item.number)}
                  >
                    {item.title}
                  </div>
                ) : null
              )}
            </div>
            <div align="center" className="desktopViewImage">
              <img src={this.state.image} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                flex: 0.2,
              }}
            >
              {left.map((item) =>
                item.number !== 0 && item.number !== 1 && item.number !== 2 ? (
                  <div
                    onMouseOver={() => this.handleMouseOver(item.number)}
                    style={{
                      padding: "4%",
                      width: " 200px",
                      boxShadow:
                        this.state.number == item.number
                          ? "5px 5px 15px rgba(0, 0, 0, 0.15)"
                          : "none",
                    }}
                    onClick={() => this.handleAnimate(item.number)}
                  >
                    {item.title}
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div align="center" className="mobileViewImage">
            <img src={this.state.image} />
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              width: "500px",
              lineBreak: "break-all",
              marginBottom: "2%",
            }}
            align="center"
          >
            {this.state.message}
          </div>
          <Button secondary>Create Account</Button>
        </div>
      </>
    );
  }
}
export default Animation;
