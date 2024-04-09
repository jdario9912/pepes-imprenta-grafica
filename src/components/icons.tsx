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
import {
  BiArrowBack,
  BiSolidEditAlt,
  BiSolidTruck,
  BiSolidUser,
  BiTimeFive,
} from "react-icons/bi";
import {
  MdAlternateEmail,
  MdAutorenew,
  MdDateRange,
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
import { IoMdSettings, IoMdWarning } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { VscSaveAs } from "react-icons/vsc";
import { IoArrowRedoSharp } from "react-icons/io5";
import { RxLinkBreak2, RxReload } from "react-icons/rx";

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
  calendario: <MdDateRange />,
  reloj: <BiTimeFive />,
  ir: <IoArrowRedoSharp />,
  reload: <RxReload />,
  break: <RxLinkBreak2 />,
  warning: <IoMdWarning />,
  back: <BiArrowBack />,
};
