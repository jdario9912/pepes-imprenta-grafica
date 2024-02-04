import {
  siNo,
  tarjetasCantidad,
  tarjetasPapel,
  tarjetasTerminacion,
  tarjetasTipo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputRadio from "../input-radio";
import InputText from "../input-text";

const TarjetasForm = () => {
  return (
    <>
      <InputText label="ubicación del archivo" />

      <InputSelect label="tipo" opciones={tarjetasTipo} />

      <InputSelect label="cantidad" opciones={tarjetasCantidad} />

      <InputSelect label="papel" opciones={tarjetasPapel} />

      <InputSelect label="terminación" opciones={tarjetasTerminacion} />

      <InputRadio label="puntas redondeadas" opciones={siNo} />
    </>
  );
};

export default TarjetasForm;
