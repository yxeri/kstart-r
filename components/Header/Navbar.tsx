import styles from "../../styles/Navbar.module.css";
import Dropdown, { GameDropdown } from "./Dropdown";

const Navbar = () => {
  const title = "Gamble";

  return (
    <nav className={styles.Navbar}>
      <div className={styles.wrapper}>
        <a href="/">
          <h1>{title}</h1>
        </a>

        <Dropdown />
        <GameDropdown />

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
          href="/forms/TodoForm"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Todolist
        </a>
        <a
          href="/stitches/Stitches"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Stitches
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
