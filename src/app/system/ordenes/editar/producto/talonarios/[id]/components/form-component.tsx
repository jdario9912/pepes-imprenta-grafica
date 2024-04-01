import { obtenerTalonarioFetch } from "@/libs/client/axios";
import Form from "./form";
import CardTituloProducto from "../../../../components/card-titulo-producto";

const FormComponent = async ({ id }: { id: string }) => {
  const orden = await obtenerTalonarioFetch(id);

  return (
    <div className="flex flex-col gap-y-2">
      <CardTituloProducto producto={orden.producto!} />
      <Form orden={orden} />
    </div>
  );
};

export default FormComponent;
