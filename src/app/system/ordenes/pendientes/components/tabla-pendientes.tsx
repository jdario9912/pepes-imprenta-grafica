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
import {
  ordenesPendientesDeAyer,
  ordenesPendientesDeHoy,
  ordenesPendientesParaManana,
} from "../../libs/filtros-ordenes-fecha";
import classNames from "classnames";
import { OrdenPendiente } from "@/types/orden";
import { estilosRowOrden } from "../../libs/estilos-row-orden";
import { useSearchParams } from "next/navigation";

const TablaPendientes = ({ pendientes }: { pendientes: OrdenPendiente[] }) => {
  const searchParams = useSearchParams();
  const pendientesSort = pendientes.slice().reverse();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [ordenes, setOrdenes] = useState<OrdenPendiente[]>(pendientesSort);

  const params = new URLSearchParams(searchParams);
  const numero_orden = params.get("nro-orden") || "";

  useEffect(() => {
    setOrdenes(
      ordenes.filter((orden) => orden.nro_orden !== Number(numero_orden))
    );
  }, [numero_orden]);

  const handleFiltroFecha = (fechaOrden: FechaOrden | null) => {
    switch (fechaOrden) {
      case "yesterday":
        setOrdenes(ordenesPendientesDeAyer(pendientesSort));
        break;

      case "today":
        setOrdenes(ordenesPendientesDeHoy(pendientesSort));
        break;

      case "tomorrow":
        setOrdenes(ordenesPendientesParaManana(pendientesSort));
        break;

      default:
        setOrdenes(pendientesSort);
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

export default TablaPendientes;
