import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { useState } from "react";
import styles from "./RHF.module.css";
import { IFormValues } from "./interface";
import { RHFFormFieldOutput } from "./RHFFieldOutput";
import { RHFormFields } from "./RHFormFields";
import { RHFConfirmPassword } from "./RHFConfirmPassword";

const RHForm = () => {
  const methods = useForm<IFormValues>({ mode: "onBlur" });
  const [user, setUser] = useState<IFormValues[]>([]);

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    setUser((user) => [...user, data]);

    console.log(data);
  };

  const formFields = RHFFormFieldOutput.map((fields) => {
    return <RHFormFields key={fields.name} fields={fields} />;
  });

  const userList = user.map((user, index) => (
    <li key={index}>
      <div className={styles.listItems}>
        <p>
          <strong>Firstname: </strong> {user.firstName}
        </p>
        <p>
          <strong>Lastname: </strong> {user.lastName}
        </p>
        <p>
          <strong>Email: </strong> {user.email}
        </p>
        <p>
          <strong>Password: </strong> {user.password}
        </p>
        <p>
          <strong>Confirm password: </strong> {user.confirmPassword}
        </p>
      </div>
    </li>
  ));

  return (
    <>
      <div className={styles.wrap}>
        <h1>React Hook Form</h1>
        <div className={styles.RHFContent}>
          <FormProvider {...methods}>
            <form id="form" onSubmit={methods.handleSubmit(onSubmit)}>
              {formFields}
              {/* 
              <input 
              {...methods.register("confirmPassword", {
                required: true,
                validate: (val: string) => {
                  if (methods.watch('password') !== val) {
                    return "passwords dont match!"
                  }
                }
              })}
              />*/}
              <RHFConfirmPassword />
              <input type="submit" />
            </form>
          </FormProvider>
        </div>
      </div>
      <div className={styles.RHFOutput}>
        <ul>{userList}</ul>
      </div>
    </>
  );
};
export default RHForm;
