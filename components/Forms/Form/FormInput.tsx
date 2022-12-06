import styles from "../css/Form.module.css";

type props = {
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  errorMessage: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

function FormInput({
  name,
  label,
  value,
  handleChange,
  error,
  errorMessage,
  onBlur,
}: props) {
  return (
    <div className={styles.form}>
      <label htmlFor={name}> {label} </label>
      <input
        type="text"
        name={name}
        required
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      <span
        className={
          styles.errorMessage + " " + (error ? styles.invalid : styles.valid)
        }
      >
        {" "}
        {errorMessage}{" "}
      </span>
    </div>
  );
}

export default FormInput;
