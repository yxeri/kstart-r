import styles from "../../components/Accordion/css/Accordion.module.css";
import Accordion from "../../components/Accordion/AccordionContent";

const AccordionContainer = () => {

  return (
    <div className={styles.Wrap}>
        <h1 className={styles.Title}>Accordion</h1>
     <Accordion />
    </div>
  );
};

export default AccordionContainer;
