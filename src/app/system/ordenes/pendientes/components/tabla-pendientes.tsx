"use client";

import { OrdenPendiente } from "@/types/orden-pendiente";
import {
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
import { useEffect, useState } from "react";
import { columns } from "../services/columns-tabla-pendientes";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import NombrePagina from "@/app/system/components/nombre-pagina";
import { formatearFecha } from "@/libs/client/moment";

const TablaPendientes = ({ pendientes }: { pendientes: OrdenPendiente[] }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [ordenes, setOrdenes] = useState<OrdenPendiente[]>(pendientes);
  const hoy = "24-02-2024";

  const hoyNumber = hoy.split("-").toReversed().join("");

  type FechaOrden = "hoy" | "manana" | "ayer" | null;
  const handleFiltroFecha = (fechaOrden: FechaOrden) => {
    switch (fechaOrden) {
      case "ayer":
        setOrdenes(
          ordenes.filter(
            (orden) =>
              formatearFecha(orden.fecha_entrega)
                .split("-")
                .toReversed()
                .join("") < hoyNumber
          )
        );
        break;

      case "hoy":
        setOrdenes(
          ordenes.filter((orden) => formatearFecha(orden.fecha_entrega) == hoy)
        );
        break;

      case "manana":
        setOrdenes(
          ordenes.filter(
            (orden) =>
              formatearFecha(orden.fecha_entrega)
                .split("-")
                .toReversed()
                .join("") > hoyNumber
          )
        );

      default:
        setOrdenes(pendientes);
        break;
    }
  };

  const table = useReactTable({
    data: ordenes,
    columns: columns,
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
        <Input
          placeholder="Buscar por nombre de cliente..."
          value={(table.getColumn("nombre")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("nombre")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
          isClearable
          onClear={() => table.getColumn("nombre")?.setFilterValue("")}
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">filtro</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="filtro ordenes">
            <DropdownItem key="todas" onClick={() => handleFiltroFecha(null)}>
              todas
            </DropdownItem>
            <DropdownItem key="ayer" onClick={() => handleFiltroFecha("ayer")}>
              ayer
            </DropdownItem>
            <DropdownItem key="hoy" onClick={() => handleFiltroFecha("hoy")}>
              hoy
            </DropdownItem>
            <DropdownItem
              key="manana"
              onClick={() => handleFiltroFecha("manana")}
            >
              manana
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NombrePagina nombre="Ordenes pendientes" />
      </div>

      <div>
        <Table aria-label="tabla ordenes pendientes">
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
          >
            atras
          </Button>
          <Button
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            siguiente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TablaPendientes;
