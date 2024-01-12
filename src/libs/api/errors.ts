export function errorGuardarCliente() {
  throw new Error("No se pudo guardar el cliente.");
}

export function errorActualizarCliennte() {
  throw new Error("Hubo un error y no se pudo actualizar el cliente.");
}

export function errorGuardarOrden() {
  throw new Error("No se pudo guardar la orden.");
}

export function errorActualizarOrden() {
  throw new Error("Hubo un error y no se pudo actualizar la orden.");
}
