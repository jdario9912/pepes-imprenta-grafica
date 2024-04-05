import { formatearFecha, formatearHora } from "@/libs/client/moment";
import { ColumnDef } from "@tanstack/react-table";
import AccionesTablaAProveedor from "../components/acciones-tabla-a-proveedor";
import { OrdenAProveedor } from "@/types/orden";
import {
  HeaderTextCenter,
  HeaderTextLeft,
} from "../../components/text-headers-tabla";
import { TextRowTabla } from "../../components/text-row-tabla";

export const columns: ColumnDef<OrdenAProveedor>[] = [
  {
    accessorKey: "nro_orden",
    header: () => <HeaderTextLeft>Orden</HeaderTextLeft>,
    cell: ({ row }) => <TextRowTabla>{row.original.nro_orden}</TextRowTabla>,
  },
  {
    accessorKey: "producto",
    header: () => <HeaderTextLeft>Producto</HeaderTextLeft>,
    cell: ({ row }) => <TextRowTabla>{row.original.producto}</TextRowTabla>,
  },

  {
    accessorKey: "nombre",
    header: () => <HeaderTextLeft>Cliente</HeaderTextLeft>,
    cell: ({ row }) => (
      <TextRowTabla>
        <div className="w-24">{row.original.nombre}</div>
      </TextRowTabla>
    ),
  },
  {
    accessorKey: "entregar",
    header: () => <HeaderTextLeft>Entregar</HeaderTextLeft>,
    cell: ({ row }) => (
      <TextRowTabla>
        <div className="flex gap-x-2">
          <p>{formatearFecha(row.original.fecha_entrega)}</p>
          <p>{formatearHora(row.original.hora_entrega)}</p>
        </div>
      </TextRowTabla>
    ),
  },
  {
    accessorKey: "creado",
    header: () => <HeaderTextLeft>Creado</HeaderTextLeft>,
    cell: ({ row }) => (
      <TextRowTabla>{formatearFecha(row.original.fecha_creacion)}</TextRowTabla>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <HeaderTextCenter>Acciones</HeaderTextCenter>,
    cell: ({ row }) => (
      <AccionesTablaAProveedor
        orden={row.original}
        disabledKeys={["proveedor"]}
      />
    ),
  },
];
