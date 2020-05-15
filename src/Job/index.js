import React, { Component } from "react";
import { Section, StyledButton } from "../Components";
import Tab from "../Components/Tabs";

import "./job.css";
const fifth = [
  {
    id: 0,
    img: require("../assets/jobs-tech.svg"),
    message: "Browse jobs by technology",
  },
  {
    id: 1,
    img: require("../assets/jobs-salary.svg"),
    message: "Browse jobs by salary",
  },
  {
    id: 2,
    img: require("../assets/jobs-visa.svg"),
    message: "Browse jobs by visa sponsorship",
  },
  {
    id: 3,
    img: require("../assets/jobs-remote.svg"),
    message: "Browse remote-friendly jobs",
  },
];

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Section fifth>
        <div style={{ paddingRight: "15%", paddingLeft: "15%" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "35px",
              marginBottom: "2%",
            }}
          >
            Looking for a job?
          </div>
          <div className="jobCard">
            {fifth.map((card, index) => (
              <Tab
                fifth={true}
                number={card.id}
                img={card.img}
                message={card.message}
              />
            ))}
          </div>
        </div>
      </Section>
    );
  }
}

export default Job;
