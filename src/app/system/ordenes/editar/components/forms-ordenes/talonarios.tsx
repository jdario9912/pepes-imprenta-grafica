import { Talonarios } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";

const TalonariosForm = () => {
  const { formState, watch } = useFormContext<Talonarios>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Talonarios> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default TalonariosForm