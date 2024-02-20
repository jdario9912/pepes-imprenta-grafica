import ReactPDF, { StyleSheet } from "@react-pdf/renderer";

const estilosPdf: ReactPDF.Styles = {
  section: {
    height: "100%",
    gap: 4,
  },
  pedido: {
    border: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: "80%",
    justifyContent: "space-between",
  },
  items: {
    flexDirection: "column",
    gap: 20,
    height: "100%",
  },
  filas: {
    gap: 3,
    flexDirection: "column",
    width: "100%",
  },
  fila: {
    flexDirection: "row",
    padding: 1,
  },
  clave: {
    width: "50%",
  },
  valor: {
    width: "50%",
  },
  observaciones: {
    width: "100%",
    padding: 2,
    lineHeight: 1.2,
    letterSpacing: 0.5,
  },
  subrayado: {
    textDecoration: "underline",
  },
};

export default StyleSheet.create(estilosPdf);
