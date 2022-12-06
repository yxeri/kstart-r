import { useState, useEffect } from "react";
import Square, { PlayerProps } from "../../components/Games/TicTacToe/Square";
import styles from "../../components/Games/TicTacToe/css/TicTacToe.module.css";

function TicTacToeBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<PlayerProps>(null);

  function setSquareValue(index: number) {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  }

  function calculateWinner(squares: PlayerProps[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }

    if (!w && !squares.filter((square) => !square).length) {
      setWinner("both");
    }
  });

  return (
    <div className={styles.gameWrap}>
      <div className={styles.gameText}>
        {!winner && (
          <p className={styles.turnsHeading}>
            {" "}
            Hey {currentPlayer}, it's your turn!{" "}
          </p>
        )}

        {winner && winner !== "both" && (
          <p className={`${styles.turnsHeading} + ${ winner === 'X' ? styles.winner_x : styles.winner_o} `}>Congratulations {winner} ! </p>
        )}
        {winner && winner === "both" && (
          <p className={styles.turnsHeading}>
            Congratulations you're {winner} winners! 
          </p>
        )}
      </div>
      <div className={styles.grid}>
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
      <button className={styles.resetButton} onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToeBoard;
