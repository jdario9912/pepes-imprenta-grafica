import { obtenerCliente, obtenerSelloFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import SellosPdf from "../../../components/productos/sellos";
import { notFound } from "next/navigation";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerSelloFetch(id);

  if (!orden) notFound();

  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  if (!cliente) notFound();

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <SellosPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
