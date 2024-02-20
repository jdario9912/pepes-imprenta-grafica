import { obtenerCliente, obtenerImpresionFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import ImpresionesPdf from "../../../components/productos/impresiones";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerImpresionFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <ImpresionesPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
