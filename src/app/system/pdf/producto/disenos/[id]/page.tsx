import { obtenerCliente, obtenerDisenoFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import DisenosPdf from "../../../components/productos/disenos";
import { notFound } from "next/navigation";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerDisenoFetch(id);

  if (!orden) notFound();

  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  if (!cliente) notFound();

  return (
    <PdfWrapper
      cliente={cliente}
      orden={orden}
    >
      <DisenosPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
