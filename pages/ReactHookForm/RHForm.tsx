import { useForm, FormProvider } from "react-hook-form";
import Navbar from "../components/Navbar";
import styles from "./RHF.module.css";
import { IFormValues } from "./interface";
import { RHFFormFieldOutput } from "./RHFFieldOutput";
import { RHFormFields } from "./RHFormFields";

const RHForm = () => {
  const methods = useForm<IFormValues>({ mode: "onBlur" });
  const watchFields = watch("password");

  const onSubmit = (data: any) => console.log(data);

  const formFields = RHFFormFieldOutput.map((fields) => {
    return <RHFormFields key={fields.name} fields={fields} />;
  });

  return (
    <>
      <Navbar />
      <div className={styles.wrap}>
        <h1>React Hook Form</h1>
        <div className={styles.RHFContent}>
          <FormProvider {...methods}>
            <form id="form" onSubmit={methods.handleSubmit(onSubmit)}>
              {formFields} 
              <input type="submit" />
            </form>
          </FormProvider>
        </div>

        <div className={styles.RHFOutput}> </div>
      </div>
    </>
  );
};
export default RHForm;
