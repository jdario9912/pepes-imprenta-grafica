import { Talonarios } from "@/types/recursos/productos";
import estilos from "../estilos";
import { Text, View } from "@react-pdf/renderer";

const TalonariosPdf = ({ orden }: { orden: Talonarios }) => (
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
            <Text>Cantidad:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.cantidad}</Text>
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
            <Text>Modelo anterior:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.modelo_anterior}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Tiene logo:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.tiene_logo}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Ubicación logo:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.ubicacion_logo}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Nro. desde:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.numero_desde}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Puntillado-emblocado:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.puntillado_emblocado}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Color duplicado:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.color_duplicado}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Triplicado:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.triplicado}</Text>
          </View>
        </View>
        <View style={estilos.fila}>
          <View style={estilos.clave}>
            <Text>Color triplicado:</Text>
          </View>
          <View style={estilos.valor}>
            <Text>{orden.color_triplicado}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default TalonariosPdf;
