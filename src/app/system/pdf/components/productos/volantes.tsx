import { Volantes } from "@/types/recursos/productos";
import estilos from "../estilos";
import { Text, View } from "@react-pdf/renderer";

const VolantesPdf = ({ orden }: { orden: Volantes }) => (
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
            <Text>Cantidad:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.cantidad}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Impreción:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.impresion}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Ubicación diseño:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.ubicacion_diseno}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default VolantesPdf;
