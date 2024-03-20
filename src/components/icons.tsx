import {
  BsFillFileEarmarkPdfFill,
  BsClipboard2Plus,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { BiSolidEditAlt, BiSolidUser } from "react-icons/bi";
import { MdAlternateEmail, MdAutorenew } from "react-icons/md";
import { CgNotes, CgUserList } from "react-icons/cg";
import { AiOutlineStop } from "react-icons/ai";

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
  persona: <BiSolidUser />
};
