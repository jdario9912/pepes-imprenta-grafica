import { plotterMaterial, plotterTerminacion } from "@/libs/listas";
import InputRadio from "../input-radio";
import InputText from "../input-text";
import PlotterColor from "../plotter-color";

const PlotterForm = () => {
  return (
    <>
      <InputText label="ubicación del archivo" />

      <InputText label="tamaño" />

      <InputRadio label="material" opciones={plotterMaterial} />
      
      <InputRadio label="terminación" opciones={plotterTerminacion} />

      <PlotterColor />
    </>
  );
};

export default PlotterForm;
