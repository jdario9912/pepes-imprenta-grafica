import NombrePagina from "@/app/system/components/nombre-pagina";
import { Card, CardBody } from "@nextui-org/react";

type Props = {
  producto: string;
};
const CardTituloProducto = ({ producto }: Props) => (
  <Card>
    <CardBody>
      <NombrePagina nombre={`Editar: ${producto}`} />
    </CardBody>
  </Card>
);

export default CardTituloProducto;
