import { obtenerCliente, obtenerTarjetaFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import TarjetasPdf from "../../../components/productos/tarjetas";
import { notFound } from "next/navigation";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerTarjetaFetch(id);

  if (!orden) notFound();

  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  if (!cliente) notFound();

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <TarjetasPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
