import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const title = "Gamble";

  return (
    <nav className={styles.Navbar}>
      <div className={styles.wrapper}>
        <a href="/">
          <h1>{title}</h1>
        </a>

        <Dropdown />

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
      </div>
    </nav>
  );
};

export default Navbar;
