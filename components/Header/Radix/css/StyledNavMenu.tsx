import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "../../../stitches/darkTheme";

export const StyledList = styled(NavigationMenu.List, {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  alignItems: "center",
  minWidth: "300px",
  height: "200px",
  borderRadius: "5px",
  position: "absolute",
  left: "-260px",
  background: "whiteSmoke",
  zIndex: "2",
  paddingTop: "10px",
  justifyContent: "space-evenly",
  boxShadow: "2px 2px 3px gray",

  "@bp1": {
    flexDirection: "row",
    boxShadow: "none",
    background: "none",
    left: "0",
    height: "auto",
    position: "relative",
    justifyContent: "space-between",
    width: "400px",
    paddingRight: "15%",
    paddingTop: "0",
  },

  variants: {
    desktop: {
      true: {
        display: "none",
        "@bp1": {
          display: "inline-flex",
        },
      },
    },
  },

  "&:hover": {
    fontWeight: "bold",
  },
});

export const StyledItem = styled(NavigationMenu.Item, {
  paddingLeft: "10px",
  marginBottom: "8%",

  "@bp1": {
    padding: "0",
    margin: "0",
  },
});

export const StyledLink = styled(NavigationMenu.Link, {
  display: "flex",
  flexDirection: "column",
  padding: "8px",

  "@bp1": {
    paddingLeft: "0",
  },

  "&:hover": {
    color: "blue",
    background: "LightGray",
    borderRadius: "5px",
    width: "100%",
  },
});

export const StyledTrigger = styled(NavigationMenu.Trigger, {
  all: "unset",
  height: "25px",
  width: "25px",
  color: "black",
  alignItems: "center",
  padding: "0px",
  fontWeight: "500",

  "@bp1": {
    fontSize: "17px",
  },

  "&:hover": {
    color: "blue",
    fontWeight: "bold",
  },
});

export const StyledContent = styled(NavigationMenu.Content, {
  position: "absolute",
  left: "200",
  minWidth: "180px",
//   animationDuration: "0.5s",
//   animationTimingFunction: "ease left",
  background: "whiteSmoke",
  borderRadius: "5px",
  boxShadow: "1px 2px 2px 3px gray",

  "@bp1": {
    boxShadow: "2px 2px 3px gray",
    top: "auto",
    width: "40%",
  },
});

export default {
  StyledList,
  StyledItem,
  StyledLink,
  StyledTrigger,
  StyledContent,
};
