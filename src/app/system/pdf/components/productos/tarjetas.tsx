import { Tarjetas } from "@/types/recursos/productos";
import estilos from "../estilos";
import { Text, View } from "@react-pdf/renderer";

const TarjetasPdf = ({ orden }: { orden: Tarjetas }) => (
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
            <Text>Ubicación archivo:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.ubicacion_archivo}</Text>
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
            <Text>Cantidad:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.cantidad}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Papel:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.papel}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Terminación:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.terminacion}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Puntas redondeadas:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.puntas_redondeadas}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default TarjetasPdf;
