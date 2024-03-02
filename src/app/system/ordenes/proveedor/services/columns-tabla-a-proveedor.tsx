import { formatearFecha, formatearHora } from "@/libs/client/moment";
import { Button } from "@nextui-org/react";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import AccionesTablaAProveedor from "../components/acciones-tabla-a-proveedor";
import { OrdenAProveedor } from "@/types/orden";

export const columns: ColumnDef<OrdenAProveedor>[] = [
  {
    accessorKey: "nro_orden",
    header: () => {
      return <div>Numero orden</div>;
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.original.nro_orden}</div>
    ),
  },
  {
    accessorKey: "producto",
    header: () => <div className="text-center">Producto</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.original.producto}</div>
    ),
  },

  {
    accessorKey: "nombre",
    header: () => <div className="text-center">Cliente</div>,
    cell: ({ row }) => {
      const cliente = row.original.nombre;
      return (
        <div className="text-right">
          <Link
            href={`/system/clientes?cliente=${cliente}`}
            className="hover:underline hover:cursor-pointer"
          >
            {cliente}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "entregar",
    header: () => <div className="text-center">Entregar</div>,
    cell: ({ row }) => (
      <div className="text-right">
        {formatearFecha(row.original.fecha_entrega)}
        {formatearHora(row.original.hora_entrega)}
      </div>
    ),
  },
  {
    accessorKey: "creado",
    header: () => <div className="text-center">Creado</div>,
    cell: ({ row }) => (
      <div className="text-right">
        {formatearFecha(row.original.fecha_creacion)}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="text-center">Acciones</div>,
    cell: ({ row }) => {
      const orden = row.original;

      return (
        <AccionesTablaAProveedor orden={orden} disabledKeys={["proveedor"]} />
      );
    },
  },
];
