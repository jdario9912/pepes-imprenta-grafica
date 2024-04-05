import { Sellos } from "@/types/recursos/productos";
import estilos from "../estilos";
import { Text, View } from "@react-pdf/renderer";

const SellosPdf = ({ orden }: { orden: Sellos }) => (
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
            <Text>Texto:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.texto}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Dibujo:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.dibujo}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default SellosPdf;
