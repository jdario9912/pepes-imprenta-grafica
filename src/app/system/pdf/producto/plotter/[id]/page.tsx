import { obtenerCliente, obtenerPlotterFetch } from "@/libs/client/axios";
import PdfWrapper from "../../../components/pdf-wrapper";
import PlotterPdf from "../../../components/productos/plotter";

const PdfPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const orden = await obtenerPlotterFetch(id);
  const cliente = await obtenerCliente(JSON.stringify(orden.id_cliente));

  return (
    <PdfWrapper cliente={cliente} orden={orden}>
      <PlotterPdf orden={orden} />
    </PdfWrapper>
  );
};

export default PdfPage;
