import { ColumnDef } from "@tanstack/react-table";
import AccionesTablaPendientes from "../components/acciones-tabla-pendientes";
import { formatearFecha, formatearHora } from "@/libs/client/moment";
import { OrdenPendiente } from "@/types/orden";

export const columns: ColumnDef<OrdenPendiente>[] = [
  {
    accessorKey: "atendio",
    header: () => {
      return <div>Atendio</div>;
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.original.atendido_por}</div>
    ),
  },
  {
    accessorKey: "fecha_creacion",
    header: () => <div className="text-center">Creado</div>,
    cell: ({ row }) => (
      <div className="text-right">
        {formatearFecha(row.original.fecha_creacion)}
      </div>
    ),
  },
  {
    accessorKey: "producto",
    header: () => <div className="text-center">Producto</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("producto")}</div>
    ),
  },
  {
    accessorKey: "nombre",
    header: () => <div className="text-center">Cliente</div>,
    cell: ({ row }) => {
      const cliente = row.original.nombre;
      return <div className="text-right">{cliente}</div>;
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
    id: "actions",
    enableHiding: false,
    header: () => <div className="text-center">Acciones</div>,
    cell: ({ row }) => {
      const orden = row.original;

      return (
        <AccionesTablaPendientes orden={orden} disabledKeys={["pendiente"]} />
      );
    },
  },
];
