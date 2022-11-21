import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export function GameDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const gameOptions = [
    { label: "StarGame", value: "/containers/StarGame", index: 1 },
    { label: "TicTacToe", value: "/containers/TicTacToeBoard", index: 2 },
    { label: "Hangman", value: "/containers/Hangman", index: 3 },
  ];

  return (
    <div
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      className={styles.container}
    >
      <h3>
        Games<AiOutlineArrowDown />
      </h3>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {gameOptions.map((option, index) => {
          return (
            <li
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.index}
              className={`${styles.option}
            ${index === highlightedIndex ? styles.highlighted : ""}`}
            >
              <a href={option.value}>{option.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const options = [
    { label: "UserForm", value: "/containers/UserForm", index: 1 },
    { label: "NewForm", value: "/components/NewForm/Form", index: 2 },
    { label: "Form", value: "/components/Form/Form", index: 3 },
    { label: "RHForm", value: "/ReactHookForm/RHForm", index: 4 },
  ];

  return (
    <div
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      className={styles.container}
    >
      <h3>
        Forms <i className={styles.arrow}></i>
      </h3>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => {
          return (
            <li
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.index}
              className={`${styles.option}
             ${index === highlightedIndex ? styles.highlighted : ""}`}
            >
              <a href={option.value}>{option.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
