import { Volantes } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";

const VolantesForm = () => {
  const { formState, watch } = useFormContext<Volantes>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Volantes> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default VolantesForm