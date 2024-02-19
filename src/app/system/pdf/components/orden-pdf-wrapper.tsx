"use client";

import type { Disenos } from "@/types/recursos/productos";
import {
  Document,
  Image,
  PDFViewer,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";
import { imagenes } from "../assets/imagenes";
import moment from "moment";

const OrdenPdfWrapper = ({
  orden,
  cliente,
}: {
  orden: Disenos;
  cliente: Cliente;
}) => {
  return (
    <div className="h-screen w-screen">
      <PDFViewer height="100%" width="100%">
        <Document>
          {/* Cliente */}
          <Page size="A5" style={{ padding: 4 }}>
            <View
              style={{
                gap: 3,
              }}
            >
              {/* Cliente */}
              <View
                style={{
                  flexDirection: "row",
                  border: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  justifyContent: "space-between",
                }}
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image
                  style={{
                    width: "35%",
                    height: "auto",
                  }}
                  src={imagenes.logo}
                />
                <View
                  style={{
                    fontSize: 13,
                    maxWidth: "80%",
                    overflow: "hidden",
                    gap: 3,
                  }}
                >
                  {/* <View style={{}}> */}
                  <Text
                    style={{
                      fontSize: 17,
                      textTransform: "capitalize",
                    }}
                  >
                    Cliente: {cliente.nombre}
                  </Text>
                  {/* </View> */}
                  <Text>Orden n°: {orden.nro_orden}</Text>
                  <Text style={{}}>Tipo: {orden.producto}</Text>
                </View>
              </View>

              {/* Empleado */}
              <View
                style={{
                  flexDirection: "row",
                  border: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 13 }}>
                  Atendido por:{" "}
                  <Text
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {orden.atendido_por}
                  </Text>
                </Text>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={{ fontSize: 13 }}>
                    Retirar el{" "}
                    {moment(orden.fecha_entrega).format("DD-MM-YYYY")}
                  </Text>
                  <Text style={{ fontSize: 13 }}>
                    a las{" "}
                    {moment(orden.hora_entrega, "HH:mm:ss").format("HH:mm")}hs
                  </Text>
                </View>
              </View>

              {/* Producto */}
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

              {/* Pago */}
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
            </View>

            {/* Footer */}
            <View
              style={{
                width: "100%",
                paddingBottom: 5,
                border: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginBottom: 0,
                alignItems: "center",
                fontSize: 11,
              }}
            >
              <Text>
                Horario de Lunes a Viernes de 9:00hs a 13:00hs y de 16:00hs a
                19:50hs
              </Text>
              <Text>
                Av. Bodereau 2249 - Villa Allende - Tel: (03543)431555
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image
                  src={imagenes.whatsappLogo}
                  style={{
                    width: 10,
                    height: 10,
                  }}
                />
                <Text>
                  {" "}
                  351 8179939 (solo mensajes) - pepoquevedo@gmail.com
                </Text>
              </View>
            </View>
          </Page>

          {/* Local */}
          <Page size="A5" style={{ padding: 4 }}>
            <View
              style={{
                gap: 3,
              }}
            >
              {/* Header */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  border: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <View
                  style={{
                    gap: 2,
                  }}
                >
                  <Text>Pedido:</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      textTransform: "capitalize",
                      backgroundColor: "#ffff00",
                    }}
                  >
                    {orden.producto}
                  </Text>
                  <Text>n°: {orden.nro_orden}</Text>
                </View>
                <View
                  style={{
                    gap: 2,
                  }}
                >
                  <Text
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    Cliente:{" "}
                    <Text
                      style={{
                        fontSize: 18,
                        backgroundColor: "#ffff00",
                      }}
                    >
                      {cliente.nombre}
                    </Text>
                  </Text>
                  <Text>
                    Tel:{" "}
                    <Text
                      style={{
                        fontSize: 18,
                        backgroundColor: "#ffff00",
                      }}
                    >
                      {cliente.telefono}
                    </Text>
                  </Text>
                </View>
              </View>

              {/* Empleado */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  border: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <View
                  style={{
                    gap: 2,
                  }}
                >
                  <Text>
                    Atendido por:{" "}
                    <Text
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {orden.atendido_por}
                    </Text>
                  </Text>
                  <Text>
                    Creado: {moment(orden.fecha_creacion).format("DD-MM-YYYY")}
                  </Text>
                </View>

                <View
                  style={{
                    gap: 2,
                  }}
                >
                  <Text>Entregar:</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      backgroundColor: "#ffff00",
                    }}
                  >
                    {moment(orden.fecha_entrega).format("DD-MM-YYYY")}
                  </Text>
                  <Text>
                    {moment(orden.hora_entrega, "HH:mm:ss").format("HH:mm")}hs
                  </Text>
                </View>
              </View>

              {/* Producto */}
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

              {/* Pago */}
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
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default OrdenPdfWrapper;
