import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../Components/index";
import "./package.css";

const packages = [
  {
    id: 0,
    rate: "$5",
    time: "per teammate / month billed annually",
    title: "Basic",
    message: "Private knowledge base for teams",
    offers: [
      "Free until June 30",
      "Your own private space hosted on stackoverflow.com",
      "Fully searchable archive",
    ],
  },
  {
    id: 1,
    rate: "$12",
    time: "per teammate / month billed annually",
    title: "Business",
    message: "Private knowledge base with SSO and premium features",
    offers: [
      "All the features of Basic",
      "Single sign-on (SSO) with SAML",
      "Reporting and analytics",
      "Priority customer support",
      "99.5% uptime",
    ],
  },
  {
    id: 2,
    rate: "Custom pricing",
    time: "",
    title: "Enterprise",
    message:
      "Standalone knowledge base with enhanced security and flexible hosting",
    offers: [
      "Host on your cloud or servers – or our private managed cloud",
      "Single sign-on with AD or SAML",
      "Robust read and write API",
      "Your own customer success and community building representative",
      "99.5% uptime SLA and priority support",
    ],
  },
];

class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div style={{ color: "#fff" }} align="center">
          <div
            style={{
              fontSize: "2.2em",
              fontWeight: "bold",
              lineHeight: "40px",
              maxWidth: "500px",
              width: "100%",
              wordBreak: "break-all",
              // height: "200px",
            }}
          >{`Unlock siloed knowledge with Stack Overflow for Teams`}</div>
          <div
            style={{
              fontSize: "1.1em",
              maxWidth: "450px",
              textAlign: "center",
              margin: "2%",
            }}
          >
            Wikis, chat messages, or formal documentation for knowledge
            management aren’t effective. Our question and answer format is a
            proven approach for accessing the right information in less time.
          </div>

          <Button> Learn More</Button>
        </div>
        <div align="center" className="packageSection">
          {packages.map((item, index) => (
            <div
              className="packageCard"
              style={{
                background: item.id == 2 ? "none" : "#fff",
                color: item.id == 2 ? "#fff" : "inherit",
                border: item.id == 2 ? "0.5px solid #fff" : "none",
              }}
            >
              <div className="card2" align="center">
                <div
                  style={{
                    color: item.id == 2 ? "#fff" : "#27348b",
                    paddingTop: "3%",
                    fontSize: "1.5em",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    padding: "2%",
                    fontSize: "1.1em",
                    fontWeight: "normal",
                    color: item.id == 2 ? "#fff" : "inherit",
                    opacity:0.8
                  }}
                >
                  {item.message}
                </div>
              </div>
              <div align="left" style={{ padding: "32px" }}>
                <div style={{ lineHeight: "20px", verticalAlign: "middle" }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: "bold", opacity:0.8 }}>
                    {item.rate}
                  </span>
                  <span style={{opacity:0.8}}> {item.time}</span>
                </div>
                <div>
                  {item.offers.map((offer) => (
                    <div style={{ lineHeight: "20px", paddingTop: "2%" }}>
                      <span style={{ color: "#f28033", fontSize: "1.5rem" ,opacity:0.8 }}>
                        &#x2713;
                      </span>
                      <span style={{opacity:0.8}}>{offer}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div align="center">
                <Button
                  className="packageButton"
                  style={{ color: "#000" }}
                  fourth={item.id == 0 || 1}
                  third={item.id == 2}
                >
                  {" "}
                  {item.id == 0
                    ? "Get started for free"
                    : item.id == 1
                    ? "Request a demo"
                    : item.id == 2
                    ? "Request a demo"
                    : "none"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Package;
// #ffb500;

// #eff0f1
