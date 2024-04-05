import { Productos } from "@/types/enums";
import { Metadata } from "next";

const infoMetadata = {
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

export const metadataHome: Metadata = {
  title: {
    template: "Pepe's | %s",
    default: "Pepe's",
  },
  ...infoMetadata,
};

export const metadataSystem: Metadata = {
  title: {
    template: "Pepe's System | %s",
    default: "Pepe's System",
  },
  ...infoMetadata,
};
