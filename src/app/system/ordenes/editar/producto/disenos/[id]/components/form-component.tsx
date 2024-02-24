import { obtenerDisenoFetch } from "@/libs/client/axios";
import Form from "./form";

const FormComponent = async ({ id }: { id: string }) => {
  // const orden = await obtenerDisenoFetch(id);

  const orden = {
    id: 1,
    id_cliente: 6,
    nro_orden: 241211458568,
    fecha_creacion: '2024-02-21T23:14:58.000Z',
    atendido_por: 'Joel',
    fecha_entrega: '2024-02-22T03:00:00.000Z',
    hora_entrega: '19:00:00',
    muestra: 'no',
    producto: 'disenos',
    ubicacion_archivo: 'no se',
    detalles: 'no tiene',
    observaciones: '',
    total: 567,
    entrega: 45,
    estado: 'proveedor',
    metodo_pago: 'efectivo'
  }

  return <Form orden={orden} />;
};

export default FormComponent;
