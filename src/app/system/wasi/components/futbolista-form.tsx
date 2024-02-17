import { UseFormRegister, useFormContext } from "react-hook-form";
import { ConnectForm } from "./connect-form";

export const FutbolistaForm = () => {
  const { formState } = useFormContext<Futbolista>();
  const { errors } = formState;
  
  return (
    <ConnectForm>
      {({ register }: { register: UseFormRegister<Futbolista> }) => (
        <label>
          botines
          <input
            {...register("botines", { required: "los botines son requeridos" })}
            className="bg-green-300"
          />
          {errors.botines && <span>{errors.botines.message}</span>}
        </label>
      )}
    </ConnectForm>
  );
};
