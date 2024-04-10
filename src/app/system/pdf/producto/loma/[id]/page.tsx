import { obtenerCliente, obtenerLomaFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import LomaPdf from "../../../components/productos/loma";
import { notFound } from "next/navigation";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerLomaFetch(id);

  if (!orden) notFound();

  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  if (!cliente) notFound();

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <LomaPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
