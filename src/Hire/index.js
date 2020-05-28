import React, { Component } from "react";
import { Section, StyledButton, Button } from "../Components";
import Card from "../Components/Card";
import Tab from "../Components/Tabs";

import "./hire.css";
class Hire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Section secondary>
          <div className="hireSection">
            <div className="hireCard">
              <img
                style={{ width: "80px", height: "80px" }}
                src={require("../assets/find-candidate.svg")}
              />
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.8em",
                  marginBottom: "2%",
                }}
              >
                Hire your technical talent
              </div>
              <div style={{ width: "500px", marginBottom: "2%", fontWeight:"0.9em",opacity:0.8 }}>
                We help expand your technical hiring strategy to promote your
                employer brand and highlight relevant open roles to our
                community of 50 million monthly visitors.
              </div>
              <Button style={{ width: "200px" }} secondary>
                Stack Overflow Talent
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flex: 0.5,
                flexDirection: "column",
                width: "400px",
                alignItems: "flex-start",
              }}
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src={require("../assets/accelerate.svg")}
              />
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.8em",
                  marginBottom: "2%",
                }}
              >
                Reach developers worldwide
              </div>
              <div style={{  width: "500px", marginBottom: "2%", fontWeight:"0.9em",opacity:0.8 }}>
                Use the world’s largest resource for people who code to help you
                increase awareness and showcase your product or service across
                Stack Overflow’s network of Q&A sites.
              </div>
              <Button style={{ width: "200px" }} secondary>
                Stack Overflow Advertising
              </Button>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Hire;
