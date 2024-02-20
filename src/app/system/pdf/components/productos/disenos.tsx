import { Disenos } from "@/types/recursos/productos";
import { Text, View } from "@react-pdf/renderer";

const DisenosPdf = ({ orden }: { orden: Disenos }) => (
  <View
    style={{
      border: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      height: "80%",
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        flexDirection: "column",
        gap: 20,
        height: "100%",
      }}
    >
      <View
        style={{
          gap: 3,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 1,
          }}
        >
          <View
            style={{
              width: "50%",
            }}
          >
            <Text>Muestra:</Text>
          </View>
          <View
            style={{
              width: "50%",
            }}
          >
            <Text>{orden.muestra}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 1,
          }}
        >
          <View
            style={{
              width: "50%",
            }}
          >
            <Text>Ubicacion archivo:</Text>
          </View>
          <View
            style={{
              width: "50%",
            }}
          >
            <Text>{orden.ubicacion_archivo}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 1,
          }}
        >
          <View
            style={{
              width: "50%",
            }}
          >
            <Text>Detalles:</Text>
          </View>
          <View
            style={{
              width: "50%",
            }}
          >
            <Text>{orden.detalles}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          padding: 2,
          lineHeight: 1.2,
          letterSpacing: 0.5,
        }}
      >
        <Text>Observaciones: {orden.observaciones}.</Text>
      </View>
    </View>
    {/* <Pago /> */}
  </View>
);

export default DisenosPdf;
