import { obtenerCliente, obtenerTarjetaFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import TarjetasPdf from "../../../components/productos/tarjetas";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerTarjetaFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <TarjetasPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
