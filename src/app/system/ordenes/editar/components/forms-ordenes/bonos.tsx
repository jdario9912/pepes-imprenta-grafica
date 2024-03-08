import { Bonos } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import InputSelect from "../../../components/input-select";

const BonosForm = () => {
  const { formState, watch, setValue, resetField } = useFormContext<Bonos>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Bonos> }) => (
        <>
          {/* continuar corrigiendo los selects y completar los formularios para editar orden */}
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default BonosForm