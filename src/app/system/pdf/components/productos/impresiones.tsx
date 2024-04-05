import { Impresiones } from "@/types/recursos/productos";
import estilos from "../estilos";
import { Text, View } from "@react-pdf/renderer";

const ImpresionesPdf = ({ orden }: { orden: Impresiones }) => (
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
            <Text>Impresión:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.impresion}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Ubicación archivo:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.ubicacion_archivo}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Faz:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.faz}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Tipo papel:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.tipo_papel}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Tamaño:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.tamano_papel}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Orientación:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.orientacion}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Anillado:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.anillado}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Abrochado:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.abrochado}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Corte:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.corte}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default ImpresionesPdf;
