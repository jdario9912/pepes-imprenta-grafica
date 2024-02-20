import { obtenerBonoFetch, obtenerCliente } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import BonosPdf from "../../../components/productos/bonos";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerBonoFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <BonosPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
