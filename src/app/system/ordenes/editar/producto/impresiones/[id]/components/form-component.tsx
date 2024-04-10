import { obtenerImpresionFetch } from "@/libs/client/axios";
import Form from "./form";
import CardTituloProducto from "../../../../components/card-titulo-producto";
import { notFound } from "next/navigation";

const FormComponent = async ({ id }: { id: string }) => {
  const orden = await obtenerImpresionFetch(id);

  if (!orden) notFound();

  return (
    <div className="flex flex-col gap-y-2">
      <CardTituloProducto producto={orden.producto!} />
      <Form orden={orden} />
    </div>
  );
};

export default FormComponent;
