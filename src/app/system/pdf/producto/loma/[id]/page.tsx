import { obtenerCliente, obtenerLomaFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import LomaPdf from "../../../components/productos/loma";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerLomaFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <LomaPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
