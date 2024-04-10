"use client";

import { Varios } from "@/types/recursos/productos";
import estilos from "../estilos";
import { Text, View } from "@react-pdf/renderer";

const VariosPdf = ({ orden }: { orden: Varios }) => (
  <View style={estilos.pedido}>
    <View style={estilos.items}>
      <View style={estilos.filas}>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Muestra:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.muestra}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Detalle:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.detalle}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default VariosPdf;
