import styles from "./css/Hangman.module.css";

const HEAD = <div className={styles.Head} />;

const BODY = <div className={styles.Body} />;

const RIGHT_ARM = (
  <div className={styles.RightArm} />
);

const LEFT_ARM = (
  <div className={styles.LeftArm} />
);

const RIGHT_LEG = (
  <div className={styles.RightLeg} />
);

const LEFT_LEG = (
  <div className={styles.LeftLeg} />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.Rope} />
      <div className={styles.GallowHorizontal} />
      <div className={styles.GallowVertical} />
      <div className={styles.GallowFoot} />
    </div>
  );
}
