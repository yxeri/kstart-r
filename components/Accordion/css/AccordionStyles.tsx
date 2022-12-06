import { styled } from "@stitches/react";
import * as Accordion from "@radix-ui/react-accordion";

export const StyledRoot = styled(Accordion.Root, {
  height: "100%",
  width: "100%",
  backgroundColor: "rgb(149, 182, 170)",
  padding: "5%",
  border: "5px solid gainsboro",
  borderRadius: "1%",
  textAlign: "center",
  justifyContent: "center",

  "@media (min-width: 768px)": {
    width: "40%",
    margin: "10% 30%",
  },
});

export const StyledHeader = styled(Accordion.Header, {
  border: "0.5px solid black",
  borderRadius: "2px",
  marginBottom: "0",

});

export const StyledItem = styled(Accordion.Item, {
  background: "rgb(240, 234, 226)",
});

export const StyledContent = styled(Accordion.Content, {
  overflow: "hidden",

  "[data-state='open']": {
    border: "1px solid black",
    borderRadius: "3px",
    height: "100%",
    animation: "fadeIn 300ms easeOut"
  },
});

export const StyledContentPTag = styled(Accordion.Content, {
  background: "rgb(240, 234, 226)",
  padding: "3%",
  textAlign: "left",
  border: "1px solid gainsboro",
  borderTop: "none",
});

export const StyledTrigger = styled(Accordion.Trigger, {
  height: "20px",
  width: "30px",
  background: "gainsboro",
  marginBottom: "10px",

  "@media (min-width: 768px)": {
    width: "60px",
    height: "40px",
  },
});

export default {
  StyledRoot,
  StyledItem,
  StyledHeader,
  StyledContent,
  StyledContentPTag,
  StyledTrigger,
};
