import {
  lomaBolsillo,
  lomaMaterial,
  lomaOrientacion,
  siNo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputRadio from "../input-radio";
import InputText from "../input-text";

const LomaForm = () => {
  return (
    <>
      <InputText label="ubicación del archivo" />

      <InputSelect label="material" opciones={lomaMaterial} />

      <InputSelect label="bolsillo" opciones={lomaBolsillo} />

      <InputRadio label="orientación" opciones={lomaOrientacion} />

      <InputRadio label="corte" opciones={siNo} />

      <InputRadio label="ojales" opciones={siNo} />

      <InputRadio label="troquelado" opciones={siNo} />

      <InputRadio label="portabaner" opciones={siNo} />
    </>
  );
};

export default LomaForm;
