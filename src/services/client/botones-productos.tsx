import { Productos } from "@/types/enums";
import { AiOutlineIdcard, AiOutlinePrinter } from "react-icons/ai";
import { BsPrinter } from "react-icons/bs";
import { GiPapers, GiTestTubes } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";
import { TbFileInvoice, TbQuestionMark } from "react-icons/tb";
import { TfiStamp } from "react-icons/tfi";


const iconos = {
  bonos: <RiCoupon3Line />,
  diseños: <HiOutlineLightBulb />,
  impresiones: <AiOutlinePrinter />,
  loma: <GiTestTubes />,
  plotter: <BsPrinter />,
  remeras: <IoShirtOutline />,
  sellos: <TfiStamp />,
  talonarios: <TbFileInvoice />,
  tarjetas: <AiOutlineIdcard />,
  varios: <TbQuestionMark />,
  volantes: <GiPapers />,
};

const productos = Object.values(Productos);

export const botonesProductos = productos.map((producto) => ({
  nombre: producto,
  icono: iconos[producto],
}));
