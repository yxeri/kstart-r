import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown";
import { useState } from "react";

const options = [
  { label: "UserForm", value: "/UserForm" },
  { label: "NewForm", value: "/components/NewForm/Form" },
  { label: "Form", value: "/components/Form/Form" },
  { label: "RHForm", value: "/ReactHookForm/RHForm" },
];

const Navbar = () => {
  const title = "Gamble";
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

  return (
    <nav className={styles.Navbar}>
      <div className={styles.wrapper}>
        <a href="/">
          <h1>{title}</h1>
        </a>

        <Dropdown
          options={options}
          value={value}
          onChange={(o) => setValue(o)}
        />

        <a
          href="/Button"
          style={{
            color: "white",
            fontSize: "18px",
            backgroundColor: "lightgray",
            boxShadow: "1px 1px 2px 2px rgb(224, 235, 238)",
            borderRadius: "8px",
            height: "32px",
          }}
        >
          Button
        </a>
        <a
          href="/UserForm"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          User Form
        </a>
        <a
          href="/components/NewForm/Form"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          New Form
        </a>
        <a
          href="/TheGame"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          The Game
        </a>
        <a
          href="/components/TodoList/TodoForm"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Todolist
        </a>
        <a
          href="/components/Form/Form"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Form
        </a>
        <a
          href="/ReactHookForm/RHForm"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          React Hook Form
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
