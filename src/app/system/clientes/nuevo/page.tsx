import { Metadata } from "next";
import NombrePagina from "../../components/nombre-pagina";
import FormCliente from "../components/form-cliente";

export const metadata: Metadata = {
  title: "Crear Cliente",
};

const NuevoCliente = () => (
  <>
    <NombrePagina nombre="Crear cliente" />
    <FormCliente />
  </>
);

export default NuevoCliente;
