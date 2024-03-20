import { Metadata } from "next";
import NombrePagina from "../../components/nombre-pagina";
import FormCliente from "../components/form-cliente";
import { Card, CardHeader } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Crear Cliente",
};

const NuevoCliente = () => (
  <div className="p-4">
    <Card className="w-full md:w-4/5 lg:w-1/2">
      <CardHeader>
        <NombrePagina nombre="Crear cliente" />
      </CardHeader>
      <FormCliente />
    </Card>
  </div>
);

export default NuevoCliente;
