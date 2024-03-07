import { Tarjetas } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";

const TarjetasForm = () => {
  const { formState, watch } = useFormContext<Tarjetas>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Tarjetas> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default TarjetasForm