import { UseFormRegister, useFormContext } from "react-hook-form";
import { ConnectForm } from "./connect-form";

const BoxeadorForm = () => {
  const methods = useFormContext()
  
  return (
  <ConnectForm>
    {({ register }: { register: UseFormRegister<Boxeador> }) => (
      <input {...register("guantes")} className="bg-green-300" />
    )}
  </ConnectForm>
);}

export default BoxeadorForm