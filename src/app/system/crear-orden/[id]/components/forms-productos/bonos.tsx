import { bonosLotes, bonosNumeradores, bonosTamano, bonosTipo } from "@/libs/listas";
import { Input, Select, SelectItem } from "@nextui-org/react";

const BonosForm = () => {
  return (
    <>
      <Select label="tipo">
        {bonosTipo.map((tipo) => (
          <SelectItem key={tipo}>{tipo}</SelectItem>
        ))}
      </Select>

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
