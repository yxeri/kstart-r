import styles from './css/StarGame.module.css'

const PlayAgain = props => (
    
    <div className={styles.gameDone}>
      <div 
        className={styles.message}
        style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
      >
        {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
      </div>
      <button onClick={props.onClick}>Play Again</button>
    </div>
    
);

export default PlayAgain;