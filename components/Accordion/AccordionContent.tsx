import { AiOutlineArrowDown } from "react-icons/ai";
import {
  StyledRoot,
  StyledItem,
  StyledHeader,
  StyledContent,
  StyledContentPTag,
  StyledTrigger,
} from "./css/AccordionStyles";

const AccordionContent = () => {
  return (
    <StyledRoot
      type="single"
      collapsible
      // defaultValue="item-1"
    >
      <StyledItem value="item-1">
        <StyledHeader>
          <h3>First</h3>
          <StyledTrigger>
            <AiOutlineArrowDown />
          </StyledTrigger>
        </StyledHeader>
        <StyledContent>
          <StyledContentPTag>Some text..</StyledContentPTag>
        </StyledContent>
      </StyledItem>

      <StyledItem value="item-2">
        <StyledHeader>
          <h3>Second</h3>
          <StyledTrigger>
            <AiOutlineArrowDown />
          </StyledTrigger>
        </StyledHeader>
        <StyledContent>
          <StyledContentPTag>
            <ul>
              <li>Shopping</li>
              <li>Go out</li>
              <li>Clean</li>
            </ul>
          </StyledContentPTag>
        </StyledContent>
      </StyledItem>

      <StyledItem value="item-3">
        <StyledHeader>
          <h3>Third</h3>
          <StyledTrigger>
            <AiOutlineArrowDown />
          </StyledTrigger>
        </StyledHeader>
        <StyledContent>
          <StyledContentPTag>Some more text..</StyledContentPTag>
        </StyledContent>
      </StyledItem>
    </StyledRoot>
  );
};

export default AccordionContent;
