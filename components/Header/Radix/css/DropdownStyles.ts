import { styled } from "@stitches/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const StyledDropdownRoot = styled(DropdownMenu.Root, {});

export const StyledDropdownTrigger = styled(DropdownMenu.Trigger, {
  // all: "unset",
  //   height: "35px",
  //   width: "35px",
  //   color: "black",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: "15px",
});

export const StyledDropdownButton = styled(DropdownMenu.Trigger, {
  all: "unset",
  height: "25px",
  width: "25px",
  color: "black",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px",
});

export const StyledDropdownPortal = styled(DropdownMenu.Portal, {});

export const StyledDropdownContent = styled(DropdownMenu.Content, {
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  borderRadius: "6px",
  background: "white",
  minWidth: "150px",
  margin: "0",
  padding: "0",
  boxShadow: "0px 10px 18px -10px black",

  "@media(min-width: 768px)": {
    flexDirection: "row",
    width: "auto",
  },
});

export const StyledDropdownLabel = styled(DropdownMenu.DropdownMenuLabel, {
  margin: "0",
  padding: "5px",
  paddingLeft: "15px",
  justifyContent: "center",

  "@media(min-width: 768px)": {
    margin: "10px",
    padding: "0",
  },

  "&:hover": {
    color: "blue",
    fontWeight: "bold",
  },
});

export const StyledDropdownItem = styled(DropdownMenu.Item, {
  minWidth: "200px",
  display: "flex",
  outline: "none",
  alignItems: "center",
  margin: "0",
  padding: "0",
  paddingLeft: "15px",
  height: "25px",
  fontSize: "16px",
  lineHeight: "1",
  fontWeight: "bold",

  "@media(min-width: 768px)": {
    height: "45px",
    paddingLeft: "15px",
    paddingRight: "15px",
    minWidth: "0",
  },

  "&:hover": {
    color: "blue",
    background: "LightGray",
    borderRadius: "5px",
    paddingLeft: "15px",
  },
});

export const StyledDropdownSub = styled(DropdownMenu.Sub, {});

export const StyledDropdownSubTrigger = styled(DropdownMenu.SubTrigger, {
  fontWeight: "600",
  border: "none",
});

export const StyledDropdownSubContent = styled(
  DropdownMenu.DropdownMenuSubContent,
  {
    display: "flex",
    flexDirection: "column",
    border: "1px solid gray",
    borderRadius: "6px",
    background: "white",
    minWidth: "200px",
    margin: "0",
    padding: "0",
    boxShadow: "0px 10px 18px -10px black",
    animationDuration: "400ms",
    animationTimingFunction: "cubicBezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",

    "@media(min-width: 768px)": {
      flexDirection: "row",
      padding: "2px",
      width: "fitContent",
      margin: "2px",
      maxWidth: "100vw",
    },

    "&:hover": {
      margin: "0",
      padding: "auto",
    },
  }
);

export default {
  StyledDropdownRoot,
  StyledDropdownTrigger,
  StyledDropdownPortal,
  StyledDropdownContent,
  StyledDropdownItem,
  StyledDropdownSubTrigger,
  StyledDropdownSubContent,
  StyledDropdownSub,
};
