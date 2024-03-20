import { obtenerCliente } from "@/libs/client/axios";
import FormCliente from "../../components/form-cliente";
import NombrePagina from "@/app/system/components/nombre-pagina";
import { Metadata } from "next";
import { Card, CardHeader } from "@nextui-org/react";
import { iconos } from "@/components/icons";

export const metadata: Metadata = {
  title: "Editar Cliente",
};

const EditarCliente = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cliente = await obtenerCliente(id);

  return (
    <div className="p-4">
      <Card className="w-full md:w-4/5 lg:w-1/2">
        <CardHeader className="flex items-center justify-between gap-x-4">
          <NombrePagina nombre="Editar cliente" />
          <p className="text-4xl">{iconos.editarPersona}</p>
        </CardHeader>
        <FormCliente cliente={cliente} />
      </Card>
    </div>
  );
};

export default EditarCliente;
