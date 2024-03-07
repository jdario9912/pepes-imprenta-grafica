import { Plotter } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";

const PlotterForm = () => {
  const { formState, watch } = useFormContext<Plotter>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Plotter> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default PlotterForm