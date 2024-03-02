"use client";

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
import { useState } from "react";
import { columns } from "../services/columns-tabla-a-proveedor";
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
import {
  ordenesProveedorDeAyer,
  ordenesProveedorDeHoy,
  ordenesProveedorParaManana,
} from "../../libs/filtros-ordenes-fecha";
import { OrdenAProveedor } from "@/types/orden";
import classNames from "classnames";
import { estilosRowOrden } from "../../libs/estilos-row-orden";

const TablaAProveedor = ({ aProveedor }: { aProveedor: OrdenAProveedor[] }) => {
  const aProveedorSort = aProveedor.slice().reverse();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [ordenes, setOrdenes] = useState<OrdenAProveedor[]>(aProveedorSort);

  const handleFiltroFecha = (fechaOrden: FechaOrden | null) => {
    switch (fechaOrden) {
      case "yesterday":
        setOrdenes(ordenesProveedorDeAyer(aProveedorSort));
        break;

      case "today":
        setOrdenes(ordenesProveedorDeHoy(aProveedorSort));
        break;

      case "tomorrow":
        setOrdenes(ordenesProveedorParaManana(aProveedorSort));
        break;

      default:
        setOrdenes(aProveedorSort);
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
            <DropdownItem
              key="yesterday"
              onClick={() => handleFiltroFecha("yesterday")}
              className="text-danger"
            >
              ayer
            </DropdownItem>
            <DropdownItem
              key="today"
              onClick={() => handleFiltroFecha("today")}
              className="text-warning"
            >
              hoy
            </DropdownItem>
            <DropdownItem
              key="tomorrow"
              onClick={() => handleFiltroFecha("tomorrow")}
              className="text-success"
            >
              manana
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NombrePagina nombre="Ordenes enviadas a proveedor" />
      </div>

      <div>
        <Table aria-label="tabla ordenes a proveedor">
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
                className={classNames(
                  estilosRowOrden(row.original.fecha_entrega)
                )}
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

export default TablaAProveedor;
