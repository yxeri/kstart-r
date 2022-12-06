import { HamburgerMenuIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import {
  StyledDropdownRoot,
  StyledDropdownTrigger,
  StyledDropdownButton,
  StyledDropdownPortal,
  StyledDropdownContent,
  StyledDropdownItem,
  StyledDropdownSubTrigger,
  StyledDropdownSubContent,
  StyledDropdownSub,
  StyledDropdownLabel,
} from "./css/DropdownStyles";

const RadixDropdown = () => {
  
  return (
    <div style={{marginRight: "auto"}}>
      <StyledDropdownRoot>
        <StyledDropdownTrigger>
          <StyledDropdownButton>
            <HamburgerMenuIcon />
          </StyledDropdownButton>
        </StyledDropdownTrigger>

        <StyledDropdownPortal>
          <StyledDropdownContent
            sideOffset={1}
          >
            <StyledDropdownItem>
              <a href="/forms/TodoForm">Todolist</a>
            </StyledDropdownItem>

            <StyledDropdownSub>
              <StyledDropdownSubTrigger>
                <StyledDropdownLabel>
                  Learning
                  <ChevronRightIcon />
                </StyledDropdownLabel>
              </StyledDropdownSubTrigger>

              {/* <StyledDropdownPortal> */}
                <StyledDropdownSubContent sideOffset={-80} alignOffset={40}>
                  <StyledDropdownItem>
                    <a href="/Button">Button</a>
                  </StyledDropdownItem>
                  <StyledDropdownItem>
                    <a href="/stitches/Stitches">Stitches</a>
                  </StyledDropdownItem>
                  <StyledDropdownItem>
                    <a href="/radix/Accordion">Radix</a>
                  </StyledDropdownItem>
                </StyledDropdownSubContent>
              {/* </StyledDropdownPortal> */}
            </StyledDropdownSub>

            <StyledDropdownSub>
              <StyledDropdownSubTrigger>
                <StyledDropdownLabel>
                  Forms
                  <ChevronRightIcon />
                </StyledDropdownLabel>
              </StyledDropdownSubTrigger>

              {/* <StyledDropdownPortal> */}
                <StyledDropdownSubContent sideOffset={-80} alignOffset={40}>
                  <StyledDropdownItem>
                    <a href="/forms/Form">Form</a>
                  </StyledDropdownItem>
                  <StyledDropdownItem>
                    <a href="/forms/NewForm">New Form</a>
                  </StyledDropdownItem>
                  <StyledDropdownItem>
                    <a href="/forms/RHForm">RHF</a>
                  </StyledDropdownItem>
                  <StyledDropdownItem>
                    <a href="/forms/UserForm">Userform</a>
                  </StyledDropdownItem>
                </StyledDropdownSubContent>
              {/* </StyledDropdownPortal> */}
            </StyledDropdownSub>
          </StyledDropdownContent>
        </StyledDropdownPortal> 
      </StyledDropdownRoot>
    </div>
  );
};

export default RadixDropdown;
