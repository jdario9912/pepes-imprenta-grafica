import { Sellos } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";

const SellosForm = () => {
  const { formState, watch } = useFormContext<Sellos>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Sellos> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default SellosForm