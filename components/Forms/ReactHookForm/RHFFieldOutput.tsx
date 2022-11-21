export const RHFFormFieldOutput = [
  {
    name: "firstName",
    type: "text",
    label: "Firstname",
    rules: { required: true, minLength: 2, pattern: /([A-Ö])\w+/ },
    message: "Min length 2 characters!",
  },
  {
    name: "lastName",
    type: "text",
    label: "Lastname",
    rules: { required: true, minLength: 2, pattern: /([A-Ö])\w+/ },
    message: "Min length 2 characters!",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    rules: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
    message: "Enter valid Email!",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    rules: {
      required: true,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    },
    message:
      "Atleast 8 characters, include a number, upper and lowercase + special character!",
  },
  /* {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    rules: { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ },
    message: "Confirm password!",
  }  */
];
