import { obtenerCliente, obtenerDisenoFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import DisenosPdf from "../../../components/productos/disenos";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerDisenoFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

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
