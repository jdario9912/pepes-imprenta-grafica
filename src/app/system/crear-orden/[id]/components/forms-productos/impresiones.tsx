import RadioCustom from "@/components/radio-custom";
import {
  impresionesFaz,
  impresionesImpesion,
  impresionesOrientacion,
  impresionesTamanoPapel,
  siNo,
} from "@/libs/listas";
import {
  Input,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";

const ImpresionesForm = () => {
  return (
    <>
      <RadioGroup label="impresiòn">
        {impresionesImpesion.map((impresion) => (
          <RadioCustom key={impresion} value={impresion}>
            {impresion}
          </RadioCustom>
        ))}
      </RadioGroup>

      <RadioGroup label="faz">
        {impresionesFaz.map((faz) => (
          <RadioCustom key={faz} value={faz}>
            {faz}
          </RadioCustom>
        ))}
      </RadioGroup>

      <Input type="text" label="tipo" />

      <Select label="tamaño">
        {impresionesTamanoPapel.map((tamano) => (
          <SelectItem key={tamano}>{tamano}</SelectItem>
        ))}
      </Select>

      <RadioGroup label="orientación">
        {impresionesOrientacion.map((orientacion) => (
          <RadioCustom key={orientacion} value={orientacion}>
            {orientacion}
          </RadioCustom>
        ))}
      </RadioGroup>

      <RadioGroup label="anillado">
        {siNo.map((opcion) => (
          <RadioCustom key={opcion} value={opcion}>
            {opcion}
          </RadioCustom>
        ))}
      </RadioGroup>

      <RadioGroup label="abrochado">
        {siNo.map((opcion) => (
          <RadioCustom key={opcion} value={opcion}>
            {opcion}
          </RadioCustom>
        ))}
      </RadioGroup>

      <RadioGroup label="corte">
        {siNo.map((opcion) => (
          <RadioCustom key={opcion} value={opcion}>
            {opcion}
          </RadioCustom>
        ))}
      </RadioGroup>
    </>
  );
};

export default ImpresionesForm;
