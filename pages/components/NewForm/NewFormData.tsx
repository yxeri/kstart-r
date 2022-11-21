import styles from "../../styles/Form.module.css";

const NewFormData = (props: any) => {
  const { id, label, errorMessage, error, onChange, onBlur, ...inputProps } =
    props;

  return (
    <div className={styles.form}>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={onBlur} />
      <span
        className={
          styles.errorMessage + " " + (error ? styles.invalid : styles.valid)
        }
      >
        {" "}
      </span>
    </div>
  );
};

export default NewFormData;
