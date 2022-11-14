import styles from "../styles/Navbar.module.css";
import { useState } from "react";

type SelectOption = {
  label: string;
  value: string;
};

type IDropdownProps = {
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
  value?: SelectOption;
};

export function Dropdown({ onChange, options }: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);


   
  
  return (
    <div
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      className={styles.container}
    >
      <h3>
        Forms <i className={styles.arrow}></i>
      </h3>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`${styles.option}
             ${index === highlightedIndex ? styles.highlighted : ""}`}
          >
            <a href={option.value} >
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
