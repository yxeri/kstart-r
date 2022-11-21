import React from "react";
import styles from "../../../styles/games/StarGame.module.css";

const PlayNumber: React.FC<ColorProps> = (props: any | string) => (
  <button
    className={styles.number}
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

interface ColorProps {
  available: string;
  used: string;
  wrong: string;
  candidate: string;
}

// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

export default PlayNumber;
