import { ColumnDef } from "@tanstack/react-table";
import AccionesTablaPendientes from "../components/acciones-tabla-pendientes";
import { formatearFecha, formatearHora } from "@/libs/client/moment";
import { OrdenPendiente } from "@/types/orden";
import {
  HeaderTextCenter,
  HeaderTextLeft,
} from "../../components/text-headers-tabla";
import { TextRowTabla } from "../../components/text-row-tabla";

export const columns: ColumnDef<OrdenPendiente>[] = [
  {
    accessorKey: "atendio",
    header: () => <HeaderTextLeft>Atendió</HeaderTextLeft>,
    cell: ({ row }) => <TextRowTabla>{row.original.atendido_por}</TextRowTabla>,
  },
  {
    accessorKey: "fecha_creacion",
    header: () => <HeaderTextLeft>Creado</HeaderTextLeft>,
    cell: ({ row }) => (
      <TextRowTabla>{formatearFecha(row.original.fecha_creacion)}</TextRowTabla>
    ),
  },
  {
    accessorKey: "producto",
    header: () => <HeaderTextLeft>Producto</HeaderTextLeft>,
    cell: ({ row }) => <TextRowTabla>{row.getValue("producto")}</TextRowTabla>,
  },
  {
    accessorKey: "nombre",
    header: () => <HeaderTextLeft>Cliente</HeaderTextLeft>,
    cell: ({ row }) => <TextRowTabla>{row.original.nombre}</TextRowTabla>,
  },
  {
    accessorKey: "entregar",
    header: () => <HeaderTextLeft>Entregar</HeaderTextLeft>,
    cell: ({ row }) => (
      <TextRowTabla>
        <div className="flex items-center gap-x-2">
          <p>{formatearFecha(row.original.fecha_entrega)}</p>
          <p>{formatearHora(row.original.hora_entrega)}hs</p>
        </div>
      </TextRowTabla>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <HeaderTextCenter>Acciones</HeaderTextCenter>,
    cell: ({ row }) => (
      <AccionesTablaPendientes
        orden={row.original}
        disabledKeys={["pendiente"]}
      />
    ),
  },
];
