import React, { Component } from "react";
import "./header.css";
import { Button } from "../Components";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  render() {
    return (
      <>
        <div class="topnav" id="myTopnav">
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "inline-block" }}>
              <div className="menu"></div>
              <div className="menu"></div>
              <div className="menu"></div>
            </div>
            <img
              style={{ height: "40px" }}
              src={require("../assets/stackoverflow.png")}
            />
            <div style={{ display: "inline-block" }}>
              <a style={{ background: "#f48024" }} href="#news">
                Products
              </a>
              <a href="#contact">Customers</a>
              <a href="#about">Use Cases</a>
            </div>{" "}
            <div style={{ display: "inline-block" }}>
              <form action="/action_page.php">
                <input
                  className="inputForm"
                  type="text"
                  placeholder="Search.."
                  name="search"
                />
              </form>
            </div>
            <div style={{ display: "inline-block", width: "400px" }}>
              <Button className="loginButton" login style={{ margin: "2%" }} href="#contact">
                Login
              </Button>
              <Button className="loginButton" signup href="#about">
                Signup
              </Button>
            </div>{" "}
            {/* <a href="javascript:void(0);" class="icon" onclick={this.navFunction}>
            <i class="fa fa-bars"></i>
          </a>
          <a href="#home" class="active">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="javascript:void(0);" class="icon" onclick={this.navFunction}>
            <i class="fa fa-bars"></i>
          </a> */}
          </div>
        </div>
      </>
    );
  }
}

export default Header;
