import InputNum from "../input-num";
import InputText from "../input-text";

const RemerasForm = () => {
  return (
    <>
      <InputText label="ubicación del archivo" />

      <InputText label="talles" />

      <InputText label="color" />

      <InputText label="estampa pecho" />

      <InputText label="estampa espalda" />

      <InputText label="color estampa" />

      <InputNum label="cantidad" />
    </>
  );
};

export default RemerasForm;
