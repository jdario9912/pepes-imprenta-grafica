"use client";

import { Loma } from "@/types/recursos/productos";
import estilos from "../estilos";
import { Text, View } from "@react-pdf/renderer";

const LomaPdf = ({ orden }: { orden: Loma }) => (
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
            <Text>Material</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.material}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Orientacion</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.orientacion}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Bolsillo</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.bolsillo}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Corte</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.corte}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Ojales</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.ojales}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Troquelado</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.troquelado}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Portabaner</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.portabaner}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default LomaPdf;
