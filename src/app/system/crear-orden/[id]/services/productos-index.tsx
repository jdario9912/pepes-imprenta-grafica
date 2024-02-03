import { AiOutlineIdcard, AiOutlinePrinter } from "react-icons/ai";
import { BsPrinter } from "react-icons/bs";
import { GiPapers, GiTestTubes } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";
import { TbFileInvoice, TbQuestionMark } from "react-icons/tb";
import { TfiStamp } from "react-icons/tfi";
import { Productos } from "@/types/enums";
import BonosForm from "../components/forms-productos/bonos";
import DisenosForm from "../components/forms-productos/disenos";

const productos = Object.values(Productos);

// falta importar los inputs de cada producto

export const productosModel = {
  bonos: { icono: <RiCoupon3Line />, inputs: <BonosForm /> },
  diseños: { icono: <HiOutlineLightBulb />, inputs: <DisenosForm /> },
  impresiones: { icono: <AiOutlinePrinter />, inputs: <div></div> },
  loma: { icono: <GiTestTubes />, inputs: <div></div> },
  plotter: { icono: <BsPrinter />, inputs: <div></div> },
  remeras: { icono: <IoShirtOutline />, inputs: <div></div> },
  sellos: { icono: <TfiStamp />, inputs: <div></div> },
  talonarios: { icono: <TbFileInvoice />, inputs: <div></div> },
  tarjetas: { icono: <AiOutlineIdcard />, inputs: <div></div> },
  varios: { icono: <TbQuestionMark />, inputs: <div></div> },
  volantes: { icono: <GiPapers />, inputs: <div></div> },
};

export const botonesProductos = productos.map((producto) => ({
  nombre: producto,
  icono: productosModel[producto].icono,
}));
