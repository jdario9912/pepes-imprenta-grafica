import { obtenerCliente, obtenerTalonarioFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import TalonariosPdf from "../../../components/productos/talonarios";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerTalonarioFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <TalonariosPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
