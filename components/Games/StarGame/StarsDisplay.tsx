import React from "react";
import utils from "./math-utils";
import styles from './css/StarGame.module.css'




const StarsDisplay = props => (
    <div>
      {utils.range(1, props.count).map(starId => (
        <div key={starId} className={styles.star} />
      ))}
    </div>
);

export default StarsDisplay;