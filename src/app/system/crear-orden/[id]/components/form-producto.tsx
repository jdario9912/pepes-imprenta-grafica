import {
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { metodosPago } from "../services/metodo-pago";
import { siNo } from "@/libs/listas";
import RadioCustom from "@/components/radio-custom";

const FormProductos = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Input type="date" />

    <Input type="time" defaultValue="19:00" />

    <RadioGroup label="muestra">
      {siNo.map((opcion) => (
        <RadioCustom value={opcion} key={opcion}>
          {opcion}
        </RadioCustom>
      ))}
    </RadioGroup>

    {children}

    <Textarea label="observaciones" />

    <Input type="num" label="importe" />

    <Input type="num" label="abono" />

    <Select label="metodo de pago">
      {metodosPago.map((metodo) => (
        <SelectItem key={metodo}>{metodo}</SelectItem>
      ))}
    </Select>
  </div>
);

export default FormProductos;
