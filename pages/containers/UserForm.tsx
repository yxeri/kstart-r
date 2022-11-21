import React, { useState } from "react";
import styles from "../styles/Form.module.css";

interface UserFormProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const UserForm: React.FC<UserFormProps> = () => {
  const [userList, setUserList] = useState<UserFormProps[]>([]);
  const [formValue, setFormValue] = useState<UserFormProps>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
        emailError: "",
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserList((userList) => [...userList, formValue]);
  };

  const listItems = userList.map((user, index) => (
    <li key={index} className={styles.listItems}>
      <div>
        <h3>User:</h3>
        <p>
          <strong>Firstname: </strong> {user.firstName}{" "}
        </p>
        <p>
          <strong>Lastname: </strong> {user.lastName}
        </p>
        <p>
          <strong>Phonenumber: </strong>
          {user.phoneNumber}
        </p>
        <p>
          <strong>Email: </strong>
          {user.email}
        </p>
        <br />
      </div>
    </li>
  ));

  return (
    <>
      <div className={styles.formBackground}>
        <div className={styles.formContainer}>
          <h1>User Form</h1>
          <br />
          <form id="form" noValidate onSubmit={handleSubmit}>
            <label>
              <p>Firstname:</p>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formValue.firstName}
              />
            </label>
            <label>
              <p>Lastname:</p>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formValue.lastName}
              />
            </label>
            <label>
              <p>Phonenumber:</p>
              <input
                type="text"
                name="phoneNumber"
                onChange={handleChange}
                value={formValue.phoneNumber}
              />
            </label>
            <label>
              <p>E-mail:</p>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formValue.email.trim()}
              />
            </label>
            <input
              className={styles.formSubmitBtn}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.formOutput}>
        <ul>{listItems}</ul>
      </div>
    </>
  );
};

export default UserForm;
