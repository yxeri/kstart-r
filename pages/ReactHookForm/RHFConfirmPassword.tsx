import { useFormContext } from "react-hook-form";

export const RHFConfirmPassword = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();


  return (
    <div>
      <label htmlFor="label">Confirm Password</label>
      <input
        {...register("confirmPassword", {
          required: true,
          validate: (value: string) => {
            if (watch("password") !== value) {
              return "error";
            } else {
              return;
            }
          },
        })}
        type="password"
      />
      {errors.confirmPassword && <span>Passwords don't match!</span>}
    </div>
  );
};
