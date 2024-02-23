import { Productos } from "@/types/enums";
import { Metadata } from "next";

export const metadataHome: Metadata = {
  title: "Pepe's",
  description: "Centro de impresión, gráfica y diseño.",
  category: "Imprenta y gráfica",
  creator: "Joel Dario Muñoz",
  keywords: [
    "gráfica",
    "imprenta",
    "Villa Allende",
    "Pepes",
    "Pepe's",
    "Pepo",
    "Quevedo",
    "fotocopias",
    "sublimados",
    ...Object.values(Productos),
  ],
};

export const metadataSystem: Metadata = {
  title: {
    template: "Pepe's System | %s",
    default: "Pepe's System",
  },
};
