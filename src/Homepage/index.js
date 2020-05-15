import React, { Component } from "react";
import { connect } from "react-redux";
import { Section, StyledButton } from "../Components";
import Card from "../Components/Card";
import Tab from "../Components/Tabs";
import { Button } from "../Components";
import Animation from "../Animation";
import Learn from "../Learn";
import Package from "../Package";
import "./homepage.css";
import SecondSection from "../SecondSection";
import Hire from "../Hire";
import Job from "../Job";
import Introduction from "../Introduction";
import { getMovies } from "../Saga";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const param = {
      offset: 0,
    };
    this.props.dispatch(getMovies(param));
  }

  render() {
    return (
      <>
        <div>
          <Section primary>
            <Introduction />
          </Section>
        </div>
        <SecondSection />
        <div>
          <Section third>
            <div>
              <Package />
            </div>
          </Section>
        </div>
        <Hire />
        <div align="center">
          <Section>
            <Animation />
          </Section>
        </div>
        <div align="center">
          <Section>
            <Learn />
          </Section>
        </div>
        <div>
          <Job />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.reducer.movies,
  };
};

export default connect(mapStateToProps)(Homepage);
