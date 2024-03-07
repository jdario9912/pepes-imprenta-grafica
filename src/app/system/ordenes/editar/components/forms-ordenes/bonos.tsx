import { Bonos } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";

const BonosForm = () => {
  const { formState, watch } = useFormContext<Bonos>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Bonos> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default BonosForm