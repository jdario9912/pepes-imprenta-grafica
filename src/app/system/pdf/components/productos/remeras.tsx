"use client";

import { Remeras } from "@/types/recursos/productos";
import estilos from "../estilos";
import { Text, View } from "@react-pdf/renderer";

const RemerasPdf = ({ orden }: { orden: Remeras }) => (
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
            <Text>Ubicacion archivo:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.ubicacion_archivo}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Talles:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.talles}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Color:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.color}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Estampa pecho:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.estampa_pecho}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Estampa espalda:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.estampa_espalda}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Color estampa:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.color_estampa}</Text>
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
      </View>
    </View>
  </View>
);

export default RemerasPdf;
