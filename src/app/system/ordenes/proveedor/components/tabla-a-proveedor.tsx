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
import { useEffect, useState } from "react";
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
import NombrePagina from "@/app/system/components/nombre-pagina";
import {
  ordenesProveedorDeAyer,
  ordenesProveedorDeHoy,
  ordenesProveedorParaManana,
} from "../../libs/filtros-ordenes-fecha";
import { OrdenAProveedor } from "@/types/orden";
import classNames from "classnames";
import { estilosRowOrden } from "../../libs/estilos-row-orden";
import { useSearchParams } from "next/navigation";
import { iconos } from "@/components/icons";
import DropdownFiltroOrdenes from "../../components/dropdown-filtro-ordenes";
import {
  HeaderTextCenter,
  HeaderTextLeft,
} from "../../components/text-headers-tabla";
import { TextRowTabla } from "../../components/text-row-tabla";
import { formatearFecha, formatearHora } from "@/libs/client/moment";
import AccionesTablaAProveedor from "./acciones-tabla-a-proveedor";

const TablaAProveedor = ({ aProveedor }: { aProveedor: OrdenAProveedor[] }) => {
  const searchParams = useSearchParams();

  const aProveedorSort = aProveedor.slice().reverse();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [ordenes, setOrdenes] = useState<OrdenAProveedor[]>(aProveedorSort);

  const params = new URLSearchParams(searchParams);
  const numero_orden = params.get("nro-orden");

  useEffect(() => {
    setOrdenes(
      ordenes.filter((orden) => orden.nro_orden !== Number(numero_orden))
    );
  }, [numero_orden]);

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

  const columns: ColumnDef<OrdenAProveedor>[] = [
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
        <TextRowTabla>
          {formatearFecha(row.original.fecha_creacion)}
        </TextRowTabla>
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
      <div className="flex justify-between items-center gap-2 py-4">
        <Input
          label="Buscar"
          placeholder="Nombre de cliente..."
          value={(table.getColumn("nombre")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("nombre")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
          isClearable
          onClear={() => table.getColumn("nombre")?.setFilterValue("")}
          color="primary"
        />

        <div className="flex items-center gap-x-2">
          <NombrePagina nombre="Ordenes a proveedor" />

          <DropdownFiltroOrdenes handleFiltroFecha={handleFiltroFecha} />
        </div>
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

export default TablaAProveedor;
