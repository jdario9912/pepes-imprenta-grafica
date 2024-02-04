import { metodosPago } from "../services/metodo-pago";
import { siNo } from "@/libs/listas";
import TextArea from "./text-area";
import InputNum from "./input-num";
import InputDate from "./input-date";
import InputTime from "./input-time";
import InputRadio from "./input-radio";
import InputSelect from "./input-select";

const FormProductos = ({ children }: { children: React.ReactNode }) => (
  <div>
    <InputDate />

    <InputTime />

    <InputRadio label="muestra" opciones={siNo} />

    {children}

    <TextArea label="observaciones" />

    <InputNum label="importe" />

    <InputNum label="abono" />

    <InputSelect label="método de pago" opciones={metodosPago} />
  </div>
);

export default FormProductos;
