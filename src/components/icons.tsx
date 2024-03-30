import {
  BsFillFileEarmarkPdfFill,
  BsClipboard2Plus,
  BsFillTelephoneFill,
  BsPersonFillAdd,
  BsFillPeopleFill,
  BsCardChecklist,
  BsFilter,
  BsGraphUpArrow,
  BsArrowLeftRight,
} from "react-icons/bs";
import { BiSolidEditAlt, BiSolidTruck, BiSolidUser } from "react-icons/bi";
import {
  MdAlternateEmail,
  MdAutorenew,
  MdOutlinePendingActions,
} from "react-icons/md";
import { CgNotes, CgUserList } from "react-icons/cg";
import {
  AiFillHome,
  AiFillLock,
  AiOutlineCloseCircle,
  AiOutlinePlus,
  AiOutlineStop,
} from "react-icons/ai";
import { FaHandshake, FaPeopleCarry, FaUserEdit } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { VscSaveAs } from "react-icons/vsc";

export const iconos = {
  verOrden: <BsFillFileEarmarkPdfFill />,
  editar: <BiSolidEditAlt />,
  cambiarEstado: <MdAutorenew />,
  crearOrden: <BsClipboard2Plus />,
  detalles: <CgUserList />,
  telefono: <BsFillTelephoneFill />,
  email: <MdAlternateEmail />,
  observaciones: <CgNotes />,
  empty: <AiOutlineStop />,
  persona: <BiSolidUser />,
  cerrar: <AiOutlineCloseCircle />,
  agregarPersona: <BsPersonFillAdd />,
  editarPersona: <FaUserEdit />,
  plus: <AiOutlinePlus />,
  home: <AiFillHome />,
  personas: <BsFillPeopleFill />,
  aProveedor: <BiSolidTruck />,
  pendientes: <MdOutlinePendingActions />,
  ordenes: <BsCardChecklist />,
  next: <GrFormNext />,
  previous: <GrFormPrevious />,
  filtro: <BsFilter />,
  settings: <IoMdSettings />,
  eliminar: <RiDeleteBin6Fill />,
  entregado: <FaHandshake />,
  realizado: <GiCheckMark />,
  guardar: <VscSaveAs />,
  empleados: <FaPeopleCarry />,
  graficas: <BsGraphUpArrow />,
  lock: <AiFillLock />,
  cambiarProducto: <BsArrowLeftRight />,
};
