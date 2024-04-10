"use client";

import type { Bonos } from "@/types/recursos/productos";
import estilos from "../estilos";
import { Text, View } from "@react-pdf/renderer";

const BonosPdf = ({ orden }: { orden: Bonos }) => (
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
            <Text>Tipo:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.tipo}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Tamaño:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.tamano}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Desde número:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.desde_numero}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Cantidad:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.cantidad}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Numeradores:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.numeradores}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>En lotes de:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.lotes}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default BonosPdf;
