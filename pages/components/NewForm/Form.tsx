import styles from "../../styles/Form.module.css";
import React, { useState } from "react";
import NewFormData from "./NewFormData";
import Navbar from "../Navbar";

interface FormProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  id: string;
}

const Form: React.FC<FormProps> = () => {
  const [formList, setFormList] = useState<FormProps[]>([]);
  const [formValue, setFormValue] = useState<FormProps>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    id: "",
  });
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === "firstname") {
      validateFirstName(e);
    }
    if (e.target.name === "lastname") {
      validateLastName(e);
    }
    if (e.target.name === "phonenumber") {
      validatePhoneNumber(e);
    }
    if (e.target.name === "email") {
      validateEmail(e);
    }
  };

  function validateFirstName(
    e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>
  ) {
    if (e.target.name === "firstName" && e.target.value.length < 2) {
      setFirstNameError(true);
    } else if (e.target.name == "firstName") {
      setFirstNameError(false);
    }
  }

  function validateLastName(
    e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>
  ) {
    if (
      e.target.name === "lastName" &&
      (e.target.value.match("[^a-zA-Z]") || e.target.value.length < 2)
    ) {
      setLastNameError(true);
    } else if (e.target.name == "lastName") {
      setLastNameError(false);
    }
  }

  function validatePhoneNumber(
    e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>
  ) {
    if (e.target.name === "phoneNumber" && e.target.value.match("[^0-9]")) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
  }

  function validateEmail(
    e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>
  ) {
    if (e.target.name === "email" && e.target.value.match("[^a-zA-Z0-9.@]")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    if (e.target.name === "firstName") {
      validateFirstName(e);
    }
    if (e.target.name === "lastName") {
      validateLastName(e);
    }
    if (e.target.name === "phoneNumber") {
      validatePhoneNumber(e);
    }
    if (e.target.name === "email") {
      validateEmail(e);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      firstNameError === false &&
      lastNameError === false &&
      phoneNumberError === false &&
      emailError === false
    ) {
      setFormList((formList) => [...formList, formValue]);
    } else {
      alert("Fill in all fields correctly!");
    }
  };

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      label: "Firstname",
      errorMessage: "Firstname should be atleast 2 characters!",
      required: true,
      onBlur: { handleBlur },

      error: { firstNameError },
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      label: "Lastname",
      errorMessage:
        "Enter valid lastname, can't include any special characters!!",
      required: true,
      onBlur: { handleBlur },
      error: { lastNameError },
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "text",
      label: "Phonenumber",
      errorMessage: "Enter valid phonenumber 0-9!",
      required: true,
      onBlur: { handleBlur },
      error: { phoneNumberError },
    },
    {
      id: 4,
      name: "email",
      type: "email",
      label: "Email",
      errorMessage: "Enter @ valid email!",
      required: true,
      onBlur: { handleBlur },
      error: { emailError },
    },
  ];

  const listItems = formList.map((form, id) => (
    <li key={id}>
      <div className={styles.formOutput}>
        <h3>User: </h3>
        <br />
        <p>
          <strong>Firstname: </strong> {form.firstName}
        </p>
        <p>
          <strong>Lastname: </strong> {form.lastName}
        </p>
        <p>
          <strong>Phone: </strong>
          {form.phoneNumber}
        </p>
        <p>
          <strong>Email: </strong> {form.email}
        </p>
        <br />
      </div>
    </li>
  ));

  return (
    <>
      <Navbar />
      <div className={styles.formBackground}>
        <div className={styles.formContainer}>
          <h1>New Form</h1>
          <br />
          <form id="form" noValidate onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <NewFormData
                key={input.id}
                {...input}
                formValue={formValue}
                onChange={handleChange}
              />
            ))}
            <br />
            <input
              className={styles.formSubmitBtn}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
      {/** User */}
      <div className={styles.formOutput}>
        <div className={styles.formList}>
          <ul>{listItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Form;
