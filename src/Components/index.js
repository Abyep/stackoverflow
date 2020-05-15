import styled from "styled-components";

export const Section = styled.div`
  height: auto;
  width: 100%;
  background: ${(props) =>
    props.primary
      ? "#fecf38"
      : props.secondary
      ? "#f7f6f9"
      : props.third
      ? "#2b2d6e"
      : props.fifth
      ? "#e1ecf4"
      : "#fff"};
  padding-top: 100px !important;
  padding-bottom: 100px !important;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => (props.developer ? "#fff" : "#f28033")};
  color: ${(props) => (props.developer ? "#f28033" : "#fff")};
  border: ${(props) => (props.developer ? "0.5px solid #f28033" : "#fff")};
  padding: 1em 1em;
  margin: 1em;
  border-radius: 5px;
`;

export const Button = styled.button`
  background: ${(props) =>
    props.primary
      ? "#2b2d6e"
      : props.third
      ? "#ffb500"
      : props.fourth
      ? "#eff0f1"
      : props.login
      ? "#e1ec4"
      : props.signup
      ? "#0095ff"
      : "#f28033"};

  color: ${(props) => (props.login ? "#39739d" : "#fff")};
  min-width: ${(props) => (props.login ? "80px" : props.signup? "80px" : "#fff")};

  border: ${(props) =>
    props.primary
      ? "0.5px solid #2b2d6e"
      : props.third
      ? "#ffb500"
      : props.fourth
      ? "#eff0f1"
      : "0.5px solid #f28033"};

  padding: 1em 1em;
  border-radius: 5px;
`;
