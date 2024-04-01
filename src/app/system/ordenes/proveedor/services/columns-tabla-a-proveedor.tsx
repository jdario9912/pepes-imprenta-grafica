import { formatearFecha, formatearHora } from "@/libs/client/moment";
import { ColumnDef } from "@tanstack/react-table";
import AccionesTablaAProveedor from "../components/acciones-tabla-a-proveedor";
import { OrdenAProveedor } from "@/types/orden";
import {
  HeaderTextCenter,
  HeaderTextLeft,
} from "../../components/headers-tabla";

export const columns: ColumnDef<OrdenAProveedor>[] = [
  {
    accessorKey: "nro_orden",
    header: () => <HeaderTextLeft texto="Orden" />,
    cell: ({ row }) => (
      <p className="text-left text-slate-800 dark:text-slate-300">
        {row.original.nro_orden}
      </p>
    ),
  },
  {
    accessorKey: "producto",
    header: () => <HeaderTextLeft texto="Producto" />,
    cell: ({ row }) => (
      <p className="text-left text-slate-800 dark:text-slate-300">
        {row.original.producto}
      </p>
    ),
  },

  {
    accessorKey: "nombre",
    header: () => <HeaderTextLeft texto="Cliente" />,
    cell: ({ row }) => (
      <p className="w-24 text-left overflow-hidden text-slate-800 dark:text-slate-300">
        {row.original.nombre}
      </p>
    ),
  },
  {
    accessorKey: "entregar",
    header: () => <HeaderTextLeft texto="Entregar" />,
    cell: ({ row }) => (
      <div className="flex gap-x-2 text-slate-800 dark:text-slate-300">
        <p>{formatearFecha(row.original.fecha_entrega)}</p>
        <p>{formatearHora(row.original.hora_entrega)}</p>
      </div>
    ),
  },
  {
    accessorKey: "creado",
    header: () => <HeaderTextLeft texto="Creado" />,
    cell: ({ row }) => (
      <p className="text-left text-slate-800 dark:text-slate-300">
        {formatearFecha(row.original.fecha_creacion)}
      </p>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <HeaderTextCenter texto="Acciones" />,
    cell: ({ row }) => (
      <AccionesTablaAProveedor
        orden={row.original}
        disabledKeys={["proveedor"]}
      />
    ),
  },
];
