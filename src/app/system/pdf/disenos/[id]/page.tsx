import { obtenerCliente, obtenerDisenoFetch } from "@/libs/client/axios";
import OrdenPdfWrapper from "../../components/orden-pdf-wrapper";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerDisenoFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente))

  return <OrdenPdfWrapper orden={orden} cliente={cliente} />;
};

export default PdfPage;
