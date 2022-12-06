import styles from "./Navbar.module.css";
// import Dropdown, { GameDropdown } from "./Dropdown";
import StitchesButton from "../../components/stitches/StitchesButton";
import RadixDropdown from "./Radix/DropdownMenu";
import NavMenu from "./Radix/NavigationMenu";
import { StyledButton } from "./Radix/css/StyledButton";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Navbar = () => {
  const title = "Gamble";
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Wrapper}>
        <a href="/">
          <h1>{title}</h1>
        </a>
        {/* <RadixDropdown /> */}


        <StyledButton
          css={{ "@bp1": { display: "none" } }}
          onClick={handleClick}
        >
          <HamburgerMenuIcon />
        </StyledButton>

        <NavMenu isOpen={isOpen} />

        <StitchesButton />
      </div>
    </nav>
  );
};

export default Navbar;
