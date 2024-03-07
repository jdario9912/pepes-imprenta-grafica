import { Loma } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";

const LomaForm = () => {
  const { formState, watch } = useFormContext<Loma>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Loma> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default LomaForm