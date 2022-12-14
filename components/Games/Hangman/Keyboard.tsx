import styles from "./css/Hangman.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
disabled?: boolean;
  activLetters: string[];
  inactivLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
    disabled = false,
  activLetters,
  inactivLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className={styles.Keyboard}>
      {KEYS.map((key) => {
        const isActive = activLetters.includes(key);
        const isInactive = inactivLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} + ${isActive ? styles.active : ""} + 
            ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
