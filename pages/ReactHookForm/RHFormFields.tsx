import { useFormContext } from "react-hook-form";

interface IFormFields {
  fields: {
    name: string;
    label: string;
    type: string;
    message: string;
    rules: {
      required: boolean;
      pattern: RegExp; /* validate?: */
      minLength?: number | undefined;
    };
  };
}

export const RHFormFields = ({ fields }: IFormFields) => {
  const {
    register,
    //watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor="">{fields.label}</label>
      <input
        {...register(fields.name, {
          minLength: fields.rules.minLength,
          pattern: fields.rules.pattern,
          required: fields.rules.required,
        })}
        type={fields.type}

      /> 
      {errors[fields.name] && <span>{fields.message}</span>}
    </div>
  );
};
