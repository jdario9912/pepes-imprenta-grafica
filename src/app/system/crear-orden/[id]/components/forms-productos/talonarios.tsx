import { siNo, talonariosColorDuplicado, talonariosColorTriplicado, talonariosPuntilladoEmblocado, talonariosTamano, talonariosTipo } from "@/libs/listas";
import InputSelect from "../input-select";
import InputNum from "../input-num";
import InputRadio from "../input-radio";
import InputText from "../input-text";

const TalonariosForm = () => {
  return (
    <>
      <InputSelect label="tipo" opciones={talonariosTipo} />

      <InputNum label="cantidad" />

      <InputSelect label="tamaño" opciones={talonariosTamano} />

      <InputRadio label="modelo anterior" opciones={siNo} />
      
      <InputRadio label="tiene logo" opciones={siNo} />

      <InputText label="ubicación del logo" />

      <InputNum label="número desde" />

      <InputSelect label="puntillado - emblocado" opciones={talonariosPuntilladoEmblocado} />

      <InputSelect label="color duplicado" opciones={talonariosColorDuplicado} />

      <InputRadio label="triplicado" opciones={siNo} />

      <InputSelect label="color triplicado" opciones={talonariosColorTriplicado} />
    </>
  );
};

export default TalonariosForm;
