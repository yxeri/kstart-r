import { styled } from "@stitches/react";
import styles from '../../styles/stitches/Stitches.module.css'

const Stitches = () => {
  const Button = styled("button", {
    color: "red",
    backgroundColor: "gainsboro",
    borderRadius: "9999px",
    fontSize: "13px",
    padding: "10px 15px",

    "&:hover": {
      backgroundColor: "lightgray",
    },
  });

  const StyledDiv = styled("div", {
    color: "red",
    justifyContent: "center",
    textAlign: "center",
    margin: "10px",
  });

  return (
    <>
    <StyledDiv>
      It works!<Button>Button</Button>
    </StyledDiv>
    <div className={styles.container}>
        <div>jj</div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </>
  );
};

export default Stitches;
