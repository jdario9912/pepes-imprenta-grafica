import { ColumnDef } from "@tanstack/react-table"
import {  Button, Checkbox} from "@nextui-org/react";
import AccionesTablaClientes from "../components/acciones-tabla-clientes";

export const columns: ColumnDef<Cliente>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()
        }
        // onCheckedChange={(value: ) => table.toggleAllPageRowsSelected(!!value)}

        aria-label="Select all"
      >j</Checkbox>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      >h</Checkbox>
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
    header: () => <div className="text-right">Telefono</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("telefono")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const cliente = row.original;

      return <AccionesTablaClientes cliente={cliente} />;
    },
  },
];