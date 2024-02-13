import {
  siNo,
  talonariosColorDuplicado,
  talonariosColorTriplicado,
  talonariosPuntilladoEmblocado,
  talonariosTamano,
  talonariosTipo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputNum from "../input-num";
import InputRadio from "../input-radio";
import InputText from "../input-text";
import { useForm } from "react-hook-form";


const TalonariosForm = () => {
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
        <InputSelect label="tipo" opciones={talonariosTipo} name="tipo" />

        <InputNum label="cantidad" name="cantidad" />

        <InputSelect label="tamaño" opciones={talonariosTamano} name="tamano" />

        <InputRadio
          label="modelo anterior"
          opciones={siNo}
          name="modelo_anterior"
        />

        <InputRadio label="tiene logo" opciones={siNo} name="tiene_logo" />

        <InputText label="ubicación del logo" name="ubicacion_logo" />

        <InputNum label="número desde" name="numero_desde" />

        <InputSelect
          label="puntillado - emblocado"
          opciones={talonariosPuntilladoEmblocado}
          name="puntillado_emblocado"
        />

        <InputSelect
          label="color duplicado"
          opciones={talonariosColorDuplicado}
          name="color_duplicado"
        />

        <InputRadio label="triplicado" opciones={siNo} name="triplicado" />

        <InputSelect
          label="color triplicado"
          opciones={talonariosColorTriplicado}
          name="color_triplicado"
        />
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

export default TalonariosForm;
