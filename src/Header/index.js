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
            <div align="center" style={{ display: "inline-block" ,height : "30px", }}>
              <a style={{ background: "#f48024", borderRadius:"25px",maxHeight:"5px",textAlign:"center", lineHeight:"5px", verticalAlign:"middle", color :"#fff", fontSize:"0.8em"}} href="#news">
                Products
              </a>
              <a  style={{ background: "#fff", borderRadius:"25px",maxHeight:"5px",textAlign:"center", lineHeight:"5px", verticalAlign:"middle", color :"grey", fontSize:"0.8em"}} href="#contact">Customers</a>
              <a  style={{ background: "#fff", borderRadius:"25px",maxHeight:"5px",textAlign:"center", lineHeight:"5px", verticalAlign:"middle", color :"grey", fontSize:"0.8em"}} href="#about">Use Cases</a>
            </div>{" "}
            <div style={{ display: "inline-block" }}>
              <form action="/action_page.php">
                <input
                  className="inputForm"
                  type="text"
                  placeholder="  Search.."
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
     
          </div>
        </div>
      </>
    );
  }
}

export default Header;
