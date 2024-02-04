import RadioCustom from "@/components/radio-custom";
import {
  impresionesFaz,
  impresionesImpesion,
  impresionesOrientacion,
  impresionesTamanoPapel,
  siNo,
} from "@/libs/listas";
import { Input, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import InputRadio from "../input-radio";
import InputText from "../input-text";
import InputSelect from "../input-select";

const ImpresionesForm = () => {
  return (
    <>
      <InputText label="ubicación del archivo" />

      <InputRadio label="impresión" opciones={impresionesImpesion} />

      <InputRadio label="faz" opciones={impresionesFaz} />

      <InputText label="tipo" />

      <InputSelect label="tamaño" opciones={impresionesTamanoPapel} />

      <InputRadio label="orientación" opciones={impresionesOrientacion} />

      <InputRadio label="anillado" opciones={siNo} />

      <InputRadio label="abrochado" opciones={siNo} />

      <InputRadio label="corte" opciones={siNo} />
    </>
  );
};

export default ImpresionesForm;
