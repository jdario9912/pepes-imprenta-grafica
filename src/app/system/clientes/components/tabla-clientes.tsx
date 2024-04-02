"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import NombrePagina from "../../components/nombre-pagina";
import { iconos } from "@/components/icons";
import { useSearchParams } from "next/navigation";
import {
  HeaderTextCenter,
  HeaderTextLeft,
} from "../../ordenes/components/text-headers-tabla";
import { TextRowTabla } from "../../ordenes/components/text-row-tabla";
import AccionesTablaClientes from "./acciones-tabla-clientes";

type TablaClientesProps = { clientes: Cliente[]; userIsAdmin: boolean };
type Busqueda = "nombre" | "telefono";

const TablaClientes = ({ clientes, userIsAdmin }: TablaClientesProps) => {
  const searchParams = useSearchParams();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [busqueda, setBusqueda] = useState<Busqueda>("nombre");
  const [clientesTabla, setClientesTabla] = useState(clientes);

  const columns: ColumnDef<Cliente>[] = [
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
        <TextRowTabla className="w-28">{row.getValue("nombre")}</TextRowTabla>
      ),
    },
    {
      accessorKey: "telefono",
      header: () => <HeaderTextLeft>Teléfono</HeaderTextLeft>,
      cell: ({ row }) => (
        <TextRowTabla>{row.getValue("telefono")}</TextRowTabla>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      header: () => <HeaderTextCenter>Acciones</HeaderTextCenter>,
      cell: ({ row }) => (
        <AccionesTablaClientes cliente={row.original} isAdmin={userIsAdmin} />
      ),
    },
  ];

  const params = new URLSearchParams(searchParams);
  const idCliente = params.get("id-cliente");

  useEffect(() => {
    setClientesTabla(
      clientesTabla.filter((cliente) => cliente.id !== Number(idCliente))
    );
  }, [idCliente]);

  const handleBusquedaNombre = () => {
    setBusqueda("nombre");
  };

  const handleBusquedaTelefono = () => {
    setBusqueda("telefono");
  };

  const table = useReactTable({
    data: clientesTabla,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2 bg-cyan-500/10 rounded-md p-1">
          <Input
            label="Buscar"
            placeholder={busqueda}
            value={
              (table.getColumn(busqueda)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(busqueda)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
            isClearable
            onClear={() => table.getColumn(busqueda)?.setFilterValue("")}
            startContent={
              busqueda == "nombre" ? iconos.persona : iconos.telefono
            }
            color="primary"
          />

          <Button
            onClick={handleBusquedaNombre}
            color="primary"
            variant={busqueda == "nombre" ? "ghost" : "light"}
          >
            nombre
          </Button>

          <Button
            onClick={handleBusquedaTelefono}
            color="primary"
            variant={busqueda == "telefono" ? "ghost" : "light"}
          >
            telefono
          </Button>
        </div>

        <NombrePagina nombre="Clientes" />
      </div>

      <div>
        <Table aria-label="tabla clientes" selectionMode="single">
          <TableHeader>
            {table.getFlatHeaders().map((header) => (
              <TableColumn key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody emptyContent={"No hay resultados para mostrar."}>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            isIconOnly
            color="primary"
            variant="ghost"
            isDisabled={!table.getCanPreviousPage()}
          >
            {iconos.previous}
          </Button>

          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            isIconOnly
            color="primary"
            variant="ghost"
            isDisabled={!table.getCanNextPage()}
          >
            {iconos.next}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TablaClientes;
