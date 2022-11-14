import { useForm } from "react-hook-form";
import { useCallback } from "react";
import Navbar from "../components/Navbar";
import styles from "./RHF.module.css";
import { IformProps } from "./interface";
import RHFOutput from "./RHFOutput";

const RHForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IformProps>();
  const onSubmit = useCallback((formValues: IformProps) => {
    console.log(formValues);
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.wrap}>
        <div className={styles.RHFContent}>
          <h1>React Hook Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="firstName">Firstname:</label>
              <input
                {...register("firstName", {
                  required: true,
                  minLength: 2,
                })} /*ref={register}*/
              />
              {errors.firstName && <span>Min length 2 characters!</span>}
            </div>
            <div>
              <label htmlFor="lastName">Lastname:</label>
              <input {...register("lastName", { minLength: 2 })} />
              {errors.lastName && <span>Min length 2 characters!</span>}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input {...register("email" /*{ pattern: '^\S+@\S+\.\S+$'} */)} />
              {errors.email && <span>Enter valid Email!</span>}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && <span>Min 6 characters!</span>}
            </div>
            <div>
              <label htmlFor="cofirmPassword">Confirm Password:</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && <span>This field is required!</span>}
            </div>

            <input type="submit" />
          </form>
        </div>
        <div className={styles.RHFOutput}>
        
        </div>
      </div>
    </>
  );
};
export default RHForm;
