import { Varios } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";

const VariosForm = () => {
  const { formState, watch } = useFormContext<Varios>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Varios> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default VariosForm