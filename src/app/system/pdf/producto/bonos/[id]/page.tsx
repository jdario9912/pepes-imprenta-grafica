import { obtenerBonoFetch, obtenerCliente } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import BonosPdf from "../../../components/productos/bonos";
import { notFound } from "next/navigation";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerBonoFetch(id);

  if (!orden) notFound();

  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  if (!cliente) notFound();

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <BonosPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
