import { iconos } from "@/components/icons";
import { obtenerCliente } from "@/libs/client/axios";
import { Card, CardBody } from "@nextui-org/react";
import DetalleCliente from "./detalle-cliente";

const InfoCliente = async ({ id }: { id: string }) => {
  const cliente = await obtenerCliente(id);
  const { nombre, telefono, email, observaciones } = cliente;

  return (
    <Card>
      <CardBody className="flex-row flex-wrap w-full gap-4">
        <DetalleCliente
          icono={iconos.persona}
          texto={nombre}
          titulo="cliente"
        />

        <DetalleCliente
          icono={iconos.telefono}
          texto={telefono}
          titulo="telefono"
        />

        {email && (
          <DetalleCliente icono={iconos.email} texto={email} titulo="email" />
        )}
        
        {observaciones && (
          <DetalleCliente
            icono={iconos.observaciones}
            texto={observaciones}
            titulo="observaciones"
          />
        )}
      </CardBody>
    </Card>
  );
};

export default InfoCliente;
