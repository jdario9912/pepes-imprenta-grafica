import RadioCustom from "@/components/radio-custom";
import { bonosLotes, bonosNumeradores, bonosTamano, bonosTipo } from "@/libs/listas";
import { Input, RadioGroup, Select, SelectItem } from "@nextui-org/react";

const BonosForm = () => {
  return (
    <>
      <RadioGroup label="tipo">
        {bonosTipo.map((tipo) => (
          <RadioCustom key={tipo} value={tipo}>
            {tipo}
          </RadioCustom>
        ))}
      </RadioGroup>

      <Select label="tamaño">
        {bonosTamano.map((tipo) => (
          <SelectItem key={tipo}>{tipo}</SelectItem>
        ))}
      </Select>

      <Select label="numeradores">
        {bonosNumeradores.map((tipo) => (
          <SelectItem key={tipo}>{tipo}</SelectItem>
        ))}
      </Select>

      <Select label="en lotes de">
        {bonosLotes.map((tipo) => (
          <SelectItem key={tipo}>{tipo}</SelectItem>
        ))}
      </Select>

      <Input type="num" label="desde número" />
      <Input type="num" label="cantidad" />
    </>
  );
};

export default BonosForm;
