import Game from "../components/StarGame/Game";
import styles from "../styles/StarGame.module.css";
import { useState } from "react";

const StarGame = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <div>
      <div className={styles.game}>
        <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
      </div>
    </div>
  );
};

export default StarGame;
