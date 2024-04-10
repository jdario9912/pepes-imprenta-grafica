"use client";

import { Text, View } from "@react-pdf/renderer";
import estilos from "./estilos";

const ObservacionesPdf = ({ texto }: { texto: string | undefined }) => (
  <View style={estilos.observaciones}>
    <Text>Observaciones: {texto}</Text>
  </View>
);

export default ObservacionesPdf;
