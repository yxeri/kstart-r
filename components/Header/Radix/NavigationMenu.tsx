import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  StyledList,
  StyledItem,
  StyledLink,
  StyledTrigger,
  StyledContent,
} from "./css/StyledNavMenu";

interface INavMenu {
  isOpen: boolean;
}

const NavMenu = ({ isOpen }: INavMenu) => {
  return (
    <NavigationMenu.Root>
      <StyledList desktop={isOpen}>
        <StyledItem>
          <StyledTrigger>
            Learning <CaretDownIcon />
          </StyledTrigger>
          <StyledContent>
            <StyledLink>
              <a href="/Button">Button</a>
            </StyledLink>
            <StyledLink>
              <a href="/stitches/Stitches">Stitches</a>
            </StyledLink>
            <StyledLink>
              <a href="/radix/Accordion">Radix</a>
            </StyledLink>
          </StyledContent>
        </StyledItem>

        <StyledItem>
          <StyledTrigger>
            Forms <CaretDownIcon />
          </StyledTrigger>
          <StyledContent>
            <StyledLink>
              <a href="/forms/Form">Form</a>
            </StyledLink>
            <StyledLink>
              <a href="/forms/NewForm">New Form</a>
            </StyledLink>
            <StyledLink>
              <a href="/forms/RHForm">RHF</a>
            </StyledLink>
            <StyledLink>
              <a href="/forms/UserForm">Userform</a>
            </StyledLink>
            <StyledLink>
              <a href="/forms/TodoForm">Todolist</a>
            </StyledLink>
          </StyledContent>
        </StyledItem>

        <StyledItem>
          <StyledTrigger>
            Games <CaretDownIcon />
          </StyledTrigger>
          <StyledContent>
            <StyledLink>
              <a href="/games/StarGame">StarGame</a>
            </StyledLink>
            <StyledLink>
              <a href="/games/Hangman">Hangman</a>
            </StyledLink>
            <StyledLink>
              <a href="/games/TicTacToeBoard">TicTacToe</a>
            </StyledLink>
          </StyledContent>
        </StyledItem>
      </StyledList>
    </NavigationMenu.Root>
  );
};

export default NavMenu;
