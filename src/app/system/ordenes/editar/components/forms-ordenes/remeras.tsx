import { Remeras } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";

const RemerasForm = () => {
  const { formState, watch } = useFormContext<Remeras>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Remeras> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default RemerasForm