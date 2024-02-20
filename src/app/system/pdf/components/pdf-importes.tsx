import type { Producto } from "@/types/recursos/productos";
import { Text, View } from "@react-pdf/renderer";

const PdfImportes = ({ orden }: { orden: Producto }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      marginTop: 5,
      borderRadius: 3,
      overflow: "hidden",
    }}
  >
    <View
      style={{
        width: "33.33%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "strech",
      }}
    >
      <View
        style={{
          textAlign: "center",
          backgroundColor: "#ffff00",
          width: "100%",
          padding: 3,
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Total
        </Text>
      </View>
      <View
        style={{
          padding: 3,
          backgroundColor: "#ffff0080",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          $ {orden.total}
        </Text>
      </View>
    </View>
    <View
      style={{
        width: "33.33%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "strech",
      }}
    >
      <View
        style={{
          textAlign: "center",
          backgroundColor: "#ffff00",
          width: "100%",
          padding: 3,
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Entrega{" "}
        </Text>
      </View>
      <View
        style={{
          padding: 3,
          backgroundColor: "#ffff0080",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          $ {orden.entrega}
        </Text>
      </View>
    </View>
    <View
      style={{
        width: "33.33%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "strech",
      }}
    >
      <View
        style={{
          textAlign: "center",
          backgroundColor: "#ffff00",
          width: "100%",
          padding: 3,
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Saldo
        </Text>
      </View>
      <View
        style={{
          padding: 3,
          backgroundColor: "#ffff0080",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          $ {orden.total - orden.entrega}
        </Text>
      </View>
    </View>
  </View>
);

export default PdfImportes;
