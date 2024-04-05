import { Disenos } from "@/types/recursos/productos";
import { Text, View } from "@react-pdf/renderer";
import estilos from "../estilos";

const DisenosPdf = ({ orden }: { orden: Disenos }) => (
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
            <Text>Detalles:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.detalles}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default DisenosPdf;
