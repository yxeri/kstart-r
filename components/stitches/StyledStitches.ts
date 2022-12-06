import { styled } from "./darkTheme";

const StyledDiv = styled("div", {
  color: "$error",
  justifyContent: "center",
  textAlign: "center",
  margin: "10px",
});

const Button = styled("button", {
  color: "$secondary",
  background: "$primary",
  borderRadius: "30px",
  fontSize: "13px",
  padding: "10px 15px",
  margin: "10px",

  "&:hover": {
    background: "$border",
  },
});

const StyledColumn = styled("div", {
  width: "100%",
  background: "$background",
  minHeight: "fitContent",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const StyledColumnDiv = styled("div", {
  padding: "1rem",
  border: "1px solid ",
  height: "fitContent",
  background: "$primary",
  margin: "1rem",
  flexWrap: "wrap",
  minWidth: "300px",
  maxWidth: "310px",
  alignItems: "flexStart",
  color: "$text",
});

export { StyledColumn, StyledDiv, Button, StyledColumnDiv };