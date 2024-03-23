import { OrdenCliente } from "@/types/orden";

export type ContadorPedidos = { producto: string; cantidad: number };

const productosPedidos = (ordenes: OrdenCliente[]): string[] => {
  let productos: string[] = [];

  ordenes.forEach((orden) => {
    if (!productos.includes(orden.producto)) productos.push(orden.producto);
  });

  return productos;
};

const contarPedidos = (
  ordenesCliente: OrdenCliente[],
  pedido: string
): ContadorPedidos => {
  let acc: number = 0;

  ordenesCliente.forEach((orden) => {
    if (pedido === orden.producto) acc++;
  });

  return { producto: pedido, cantidad: acc };
};

export const agruparOrdenes = (ordenesCliente: OrdenCliente[]) => {
  let productosAgrupados: ContadorPedidos[] = [];
  const pedidos = productosPedidos(ordenesCliente);

  pedidos.forEach((pedido) => {
    const contadorPedidos = contarPedidos(ordenesCliente, pedido);

    productosAgrupados = [...productosAgrupados, contadorPedidos];
  });

  return productosAgrupados;
};
