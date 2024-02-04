import { sellosTipo } from "@/libs/listas";
import InputSelect from "../input-select";
import TextArea from "../text-area";

const SellosForm = () => {
  return (
    <>
      <InputSelect label="tipo" opciones={sellosTipo} />

      <TextArea label="tamaño" />

      <TextArea label="texto" />

      <TextArea label="dibujo" />
    </>
  );
};

export default SellosForm;
