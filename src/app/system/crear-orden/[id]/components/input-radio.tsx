import RadioCustom from "@/components/radio-custom";
import { RadioGroup } from "@nextui-org/react";

const InputRadio = ({
  label,
  opciones,
}: {
  label: string;
  opciones: string[];
}) => (
  <>
    <RadioGroup label={label}>
      {opciones.map((opcion) => (
        <RadioCustom value={opcion} key={opcion}>
          {opcion}
        </RadioCustom>
      ))}
    </RadioGroup>
  </>
);

export default InputRadio;
