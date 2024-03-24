import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@nextui-org/react";
import AccionesTablaClientes from "../components/acciones-tabla-clientes";

export const columns: ColumnDef<Cliente>[] = [
  {
    accessorKey: "nombre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("nombre")}</div>
    ),
  },
  {
    accessorKey: "telefono",
    header: () => <div className="text-center">Telefono</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("telefono")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="text-center">Acciones</div>,
    cell: ({ row, table }) => {
      const cliente = row.original;
      
      const isAdmin = table.options.isAdmin

      return <AccionesTablaClientes cliente={cliente} isAdmin={isAdmin} />;
    },
  },
];
