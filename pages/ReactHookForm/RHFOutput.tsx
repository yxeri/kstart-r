import { IformProps } from "./interface";
import { useForm } from "react-hook-form";
import { useCallback } from "react";

function RHFOutput() {
  const { register, handleSubmit } = useForm<IformProps>();
  const onSubmit = useCallback((formValues: IformProps) => {
    console.log(formValues);
    register
  }, []);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
  };
}

export default RHFOutput;