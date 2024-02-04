import {
  bonosLotes,
  bonosNumeradores,
  bonosTamano,
  bonosTipo,
} from "@/libs/listas";
import InputNum from "../input-num";
import InputRadio from "../input-radio";
import InputSelect from "../input-select";

const BonosForm = () => {
  return (
    <>
      <InputRadio label="tipo" opciones={bonosTipo} />

      <InputSelect label="tamaño" opciones={bonosTamano} />

      <InputSelect label="numeradores" opciones={bonosNumeradores} />

      <InputSelect label="en lotes de" opciones={bonosLotes} />

      <InputNum label="desde número" />

      <InputNum label="cantidad" />
    </>
  );
};

export default BonosForm;
