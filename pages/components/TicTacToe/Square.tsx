import styles from "../../styles/TicTacToe.module.css";

export type PlayerProps = ( 'X' | 'O' | 'both' | null );

function Square({
  value,
  onClick,
  winner,
}: {
  winner: PlayerProps;
  value: PlayerProps;
  onClick: () => void;
}) {
  if (!value) {
    return (
      <button
        className={styles.square}
        onClick={onClick}
        disabled={Boolean(winner)}
      />
    );
  }

  return (
    <button
      disabled
      className={`${styles.square} + ${ value === 'X' ? styles.square_x : styles.square_o} `}
     >
      {value}
    </button>
  );
}

export default Square;
