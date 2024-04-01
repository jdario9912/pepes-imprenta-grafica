import { ColumnDef } from "@tanstack/react-table";
import AccionesTablaPendientes from "../components/acciones-tabla-pendientes";
import { formatearFecha, formatearHora } from "@/libs/client/moment";
import { OrdenPendiente } from "@/types/orden";
import {
  HeaderTextCenter,
  HeaderTextLeft,
} from "../../components/headers-tabla";
import { Chip } from "@nextui-org/react";
import { iconos } from "@/components/icons";

export const columns: ColumnDef<OrdenPendiente>[] = [
  {
    accessorKey: "atendio",
    header: () => <HeaderTextLeft texto="Atendió" />,
    cell: ({ row }) => (
      <p className="text-left text-slate-800 dark:text-slate-300">
        {row.original.atendido_por}
      </p>
    ),
  },
  {
    accessorKey: "fecha_creacion",
    header: () => <HeaderTextLeft texto="Creado" />,
    cell: ({ row }) => (
      <p className="text-left text-slate-800 dark:text-slate-300">
        {formatearFecha(row.original.fecha_creacion)}
      </p>
    ),
  },
  {
    accessorKey: "producto",
    header: () => <HeaderTextLeft texto="Producto" />,
    cell: ({ row }) => (
      <p className="text-left text-slate-800 dark:text-slate-300">
        {row.getValue("producto")}
      </p>
    ),
  },
  {
    accessorKey: "nombre",
    header: () => <HeaderTextLeft texto="Cliente" />,
    cell: ({ row }) => (
      <p className="w-20 text-left overflow-hidden text-slate-800 dark:text-slate-300">
        {row.original.nombre}
      </p>
    ),
  },
  {
    accessorKey: "entregar",
    header: () => <HeaderTextLeft texto="Entregar" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2 text-slate-800 dark:text-slate-300">
        <p>{formatearFecha(row.original.fecha_entrega)}</p>
        <p>{formatearHora(row.original.hora_entrega)}hs</p>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <HeaderTextCenter texto="Acciones" />,
    cell: ({ row }) => {
      const orden = row.original;

      return (
        <AccionesTablaPendientes orden={orden} disabledKeys={["pendiente"]} />
      );
    },
  },
];
