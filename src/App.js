import React, { Component } from "react";
import Header from "./Header";
import Homepage from "./Homepage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Homepage />
      </>
    );
  }
}

export default App;
