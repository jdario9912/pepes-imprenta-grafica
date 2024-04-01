import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@nextui-org/react";
import AccionesTablaClientes from "../components/acciones-tabla-clientes";
import {
  HeaderTextCenter,
  HeaderTextLeft,
} from "../../ordenes/components/text-headers-tabla";
import { TextRowTabla } from "../../ordenes/components/text-row-tabla";

export const columns: ColumnDef<Cliente>[] = [
  {
    accessorKey: "nombre",
    header: ({ column }) => (
      <HeaderTextLeft>
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
        </Button>
      </HeaderTextLeft>
    ),
    cell: ({ row }) => (
      <TextRowTabla>
        <div className="w-28">{row.getValue("nombre")}</div>
      </TextRowTabla>
    ),
  },
  {
    accessorKey: "telefono",
    header: () => <HeaderTextLeft>Teléfono</HeaderTextLeft>,
    cell: ({ row }) => <TextRowTabla>{row.getValue("telefono")}</TextRowTabla>,
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <HeaderTextCenter>Acciones</HeaderTextCenter>,
    cell: ({ row, table }) => (
      <AccionesTablaClientes
        cliente={row.original}
        isAdmin={table.options.isAdmin}
      />
    ),
  },
];
