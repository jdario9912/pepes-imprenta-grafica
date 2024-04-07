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
import ImpresionesForm from "../components/forms-productos/impresiones";
import LomaForm from "../components/forms-productos/loma";
import PlotterForm from "../components/forms-productos/plotter";
import RemerasForm from "../components/forms-productos/remeras";
import SellosForm from "../components/forms-productos/sellos";
import TalonariosForm from "../components/forms-productos/talonarios";
import TarjetasForm from "../components/forms-productos/tarjetas";
import VariosForm from "../components/forms-productos/varios";
import VolantesForm from "../components/forms-productos/volantes";

type Producto = {
  icono: React.ReactNode;
  inputs: React.ReactNode;
};

type ProductosModel = {
  [key: string]: Producto;
};

export const productosModel: ProductosModel = {
  bonos: { icono: <RiCoupon3Line />, inputs: <BonosForm /> },
  diseños: { icono: <HiOutlineLightBulb />, inputs: <DisenosForm /> },
  impresiones: { icono: <AiOutlinePrinter />, inputs: <ImpresionesForm /> },
  loma: { icono: <GiTestTubes />, inputs: <LomaForm /> },
  plotter: { icono: <BsPrinter />, inputs: <PlotterForm /> },
  remeras: { icono: <IoShirtOutline />, inputs: <RemerasForm /> },
  sellos: { icono: <TfiStamp />, inputs: <SellosForm /> },
  talonarios: { icono: <TbFileInvoice />, inputs: <TalonariosForm /> },
  tarjetas: { icono: <AiOutlineIdcard />, inputs: <TarjetasForm /> },
  varios: { icono: <TbQuestionMark />, inputs: <VariosForm /> },
  volantes: { icono: <GiPapers />, inputs: <VolantesForm /> },
};

export const productos = Object.values(Productos);

export const botonesProductos = productos.map((producto) => ({
  nombre: producto,
  icono: productosModel[producto].icono,
}));
