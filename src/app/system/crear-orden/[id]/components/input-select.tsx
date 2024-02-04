import { Select, SelectItem } from "@nextui-org/react";

const InputSelect = ({
  label,
  opciones,
}: {
  label: string;
  opciones: string[];
}) => (
  <>
    <Select label={label}>
      {opciones.map((opcion) => (
        <SelectItem key={opcion}>{opcion}</SelectItem>
      ))}
    </Select>
  </>
);

export default InputSelect;
