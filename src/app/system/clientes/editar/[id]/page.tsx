import { obtenerCliente } from "@/libs/client/axios";
import FormCliente from "../../components/form-cliente";
import NombrePagina from "@/app/system/components/nombre-pagina";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editar Cliente",
};

const EditarCliente = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cliente = await obtenerCliente(id);

  return (
    <>
      <NombrePagina nombre="Editar cliente" />
      <FormCliente cliente={cliente} />
    </>
  );
};

export default EditarCliente;
