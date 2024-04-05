import { obtenerCliente, obtenerVariosFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import VariosPdf from "../../../components/productos/varios";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerVariosFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <VariosPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
