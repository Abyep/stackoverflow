import React, { Component } from "react";
import Card from "../Components/Card";
import Tab from "../Components/Tabs";
import { Button } from "../Components";
import { Section, StyledButton } from "../Components";
import "./second.css";
const secondSectionTab = [
  {
    id: 0,
    img: require("../assets/private-questions.svg"),
    message: "Quickly find and share internal knowledge with Private Q&A.",
  },
  {
    id: 1,
    img: require("../assets/find-candidate.svg"),
    message:
      "Find the perfect candidate for your growing technical team with Talent solutions",
  },
  {
    id: 2,
    img: require("../assets/accelerate.svg"),
    message:
      "Accelerate the discovery of your products or services through our Advertising platform",
  },
];

const secondSection = [
  {
    id: 0,
    img: require("../assets/public.svg"),
    title: "Public Q&A",
    message:
      "Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.",
    action: "Browse questions",
  },
  {
    id: 1,
    img: require("../assets/public.svg"),
    title: "Private Q&A",
    message:
      "Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.",
    action: "Try for free",
  },
  {
    id: 2,
    img: require("../assets/public.svg"),
    title: "Browse jobs",
    message:
      "Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.",
    action: "Find a job",
  },
];

class SecondSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Section secondary>
          <div align="center">
            <div className="sectionHeading">{`For developers, by developers`}</div>
            <div
              style={{
                width: "70px",
                height: "10px",
                background: "#f28033",
                borderRadius: "5px",
                marginTop: "2%",
              }}
            ></div>
            <div
              style={{
                fontSize: "1.1em",
                maxWidth: "550px",
                textAlign: "center",
                margin: "2%",
              }}
            >
              Stack Overflow is an open community for anyone that codes. We help
              you get answers to your toughest coding questions, share knowledge
              with your coworkers in private, and find your next dream job.
            </div>
            <div className="section2">
              {secondSection.map((card, index) => (
                <Card
                  number={card.id}
                  img={card.img}
                  title={card.title}
                  message={card.message}
                  action={card.action}
                />
              ))}
            </div>
          </div>
          <div align="center">
            <div className="sectionHeading">{`For businesses, by developers`}</div>
            <div className="label"></div>
            <div
              className="secondHeading"
              style={{
                fontSize: "1.1em",
                maxWidth: "550px",
                textAlign: "center",
                margin: "2%",
              }}
            >
              Our mission is to help developers write the script of the future.
              This means helping you find and hire skilled developers for your
              business and providing them the tools they need to share knowledge
              and work effectively.
            </div>
            <div className="section2">
              {secondSectionTab.map((card, index) => (
                <Tab number={card.id} img={card.img} message={card.message} />
              ))}
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default SecondSection;
