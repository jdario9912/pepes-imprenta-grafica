import {
  Input,
  Listbox,
  ListboxItem,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { metodosPago } from "../services/metodo-pago";

const FormProductos = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div>
    <Input type="date" />
    <Input type="time" defaultValue="19:00" />
    <Listbox aria-label="muestra" onAction={(key) => console.log(key)}>
      <ListboxItem key="si">Si</ListboxItem>
      <ListboxItem key="no">No</ListboxItem>
    </Listbox>
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
