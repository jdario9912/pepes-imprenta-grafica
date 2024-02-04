import {
  volantesCantidad,
  volantesImpresion,
  volantesTamano,
  volantesTipo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputText from "../input-text";

const VolantesForm = () => {
  return (
    <>
      <InputSelect label="tipo" opciones={volantesTipo} />

      <InputSelect label="tamaño" opciones={volantesTamano} />

      <InputSelect label="cantidad" opciones={volantesCantidad} />

      <InputSelect label="impresión" opciones={volantesImpresion} />

      <InputText label="ubicación del diseño" />
    </>
  );
};

export default VolantesForm;
