import { obtenerCliente, obtenerVolanteFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import VolantesPdf from "../../../components/productos/volantes";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerVolanteFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <VolantesPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
