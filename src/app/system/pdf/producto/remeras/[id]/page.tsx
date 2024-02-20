import { obtenerCliente, obtenerRemeraFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import RemerasPdf from "../../../components/productos/remeras";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerRemeraFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <RemerasPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
