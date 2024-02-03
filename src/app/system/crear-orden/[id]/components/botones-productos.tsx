import { Button } from "@nextui-org/react";
import { botonesProductos } from "../services/productos-index";

const BotonesProductos = ({
  setProductoElegido,
}: {
  setProductoElegido: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div>
    {botonesProductos.map(({ nombre, icono }) => (
      <Button key={nombre} onClick={() => setProductoElegido(nombre)}>
        {icono}
        {nombre}
      </Button>
    ))}
  </div>
);

export default BotonesProductos;
