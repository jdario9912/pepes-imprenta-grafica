import { Productos } from "@/types/enums";
import { Metadata } from "next";

export const metadataInfo: Metadata = {
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
    ...Object.values(Productos)
  ],
};
