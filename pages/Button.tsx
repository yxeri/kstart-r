import styles from "../components/Button/Button.module.css";
import BaseButton from "../components/Button/BaseButton"

const Button = () => {
  return (
    <div className={styles.Button}>
      <h1>Buttons</h1>
      <BaseButton text="En liten knapp" size="s" disabled />
      <BaseButton text="En större knapp" size="m" isFluid />
      <BaseButton
        text="en länk"
        href="http://google.se"
        size="m"
        target="_blank"
      />
    </div>
  );
};

export default Button;
