import styles from './css/Hangman.module.css'

type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
}

export default function HangmanWord( { guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) {
 
  return (
    <div className={styles.Characters} >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal
                ? "visible"
                : "hidden",
                color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
            }}
          >
            {" "}
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
