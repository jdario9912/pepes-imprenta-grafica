import { Metadata } from "next";
import NombrePagina from "../../components/nombre-pagina";
import FormCliente from "../components/form-cliente";
import { Card, CardHeader } from "@nextui-org/react";
import { iconos } from "@/components/icons";

export const metadata: Metadata = {
  title: "Crear Cliente",
};

const NuevoCliente = () => (
  <div className="p-4">
    <Card className="w-full md:w-4/5 lg:w-1/2">
      <CardHeader className="flex items-center justify-between">
        <NombrePagina nombre="Crear cliente" />
        <p className="text-2xl text-zinc-700">{iconos.agregarPersona}</p>
      </CardHeader>
      <FormCliente />
    </Card>
  </div>
);

export default NuevoCliente;
