import {
  lomaBolsillo,
  lomaMaterial,
  lomaOrientacion,
  siNo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputRadio from "../input-radio";
import InputText from "../input-text";
import FormProducto from "../form-producto";
import { useForm } from "react-hook-form";


const LomaForm = () => {
  return (
    <form onSubmit={onSubmit}>
      <FormProducto>
        <Input
          type="date"
          {...register("fecha_entrega", {
            required: "La fecha de entrega es obligatoria.",
          })}
          isInvalid={errors.fecha_entrega ? true : false}
          errorMessage={errors.fecha_entrega?.message}
          variant={errors.fecha_entrega ? "bordered" : "flat"}
        />

        <Input
          type="time"
          {...register("hora_entrega", {
            required: "la hora de entrega es requerida.",
          })}
          isInvalid={errors.hora_entrega ? true : false}
          errorMessage={errors.hora_entrega?.message}
          variant={errors.hora_entrega ? "bordered" : "flat"}
          defaultValue="19:00"
        />

        <RadioGroup
          label="Muestra"
          {...register("muestra", { required: "Muestra es requerido." })}
          isInvalid={errors.muestra ? true : false}
          errorMessage={errors.muestra?.message}
        >
          {siNo.map((opcion) => (
            <RadioCustom value={opcion} key={opcion} />
          ))}
        </RadioGroup>
        <InputText label="ubicación del archivo" name="ubicacion_archivo" />

        <InputSelect label="material" opciones={lomaMaterial} name="material" />

        <InputSelect label="bolsillo" opciones={lomaBolsillo} name="bolsillo" />

        <InputRadio
          label="orientación"
          opciones={lomaOrientacion}
          name="orientacion"
        />

        <InputRadio label="corte" opciones={siNo} name="corte" />

        <InputRadio label="ojales" opciones={siNo} name="ojales" />

        <InputRadio label="troquelado" opciones={siNo} name="troquelado" />

        <InputRadio label="portabaner" opciones={siNo} name="portabaner" />
        <Textarea label="Observaciones" {...register("observaciones")} />

        <Input
          type="num"
          label="Total"
          {...register("total", { required: "El importe total es requerido." })}
          isInvalid={errors.total ? true : false}
          errorMessage={errors.total?.message}
          variant={errors.total ? "bordered" : "flat"}
        />

        <Input
          type="num"
          label="Entrega"
          {...register("entrega", {
            required: "El monto de la entrega es requerido.",
          })}
          isInvalid={errors.entrega ? true : false}
          errorMessage={errors.entrega?.message}
          variant={errors.entrega ? "bordered" : "flat"}
        />

        <Select
          label="Método de pago"
          {...register("metodo_pago", {
            required: "",
          })}
          isInvalid={errors.metodo_pago ? true : false}
          errorMessage={errors.metodo_pago?.message}
          variant={errors.metodo_pago ? "bordered" : "flat"}
        >
          {metodosPago.map((opcion) => (
            <SelectItem key={opcion}>{opcion}</SelectItem>
          ))}
        </Select>
      </FormProducto>
    </form>
  );
};

export default LomaForm;
