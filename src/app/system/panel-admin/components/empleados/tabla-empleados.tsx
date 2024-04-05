"use client";

import WrapperBtnAccionesTabla from "@/components/wrapper-btn-acciones-tabla";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import ModalEliminarEmpleado from "./modal-eliminar-empleado";
import ModalEditarEmpleado from "./modal-editar-empleado";
import ModalAgregarEmpleado from "./modal-agregar-empleado";

type TablaEmpleadosProps = { empleados: Empleado[] };

const TablaEmpleados = ({ empleados }: TablaEmpleadosProps) => {
  return (
    <>
      <Table
        aria-label="Tabla de empleados"
        classNames={{
          wrapper: "min-h-[222px]",
        }}
        topContent={
          <div className="text-right">
            <ModalAgregarEmpleado />
          </div>
        }
        topContentPlacement="inside"
      >
        <TableHeader>
          <TableColumn key="nickname">Empleado</TableColumn>
          <TableColumn key="permisos">Permiso</TableColumn>
          <TableColumn key="acciones">Acciones</TableColumn>
        </TableHeader>
        <TableBody
          items={empleados}
          emptyContent={"No hay contenido para mostrar."}
        >
          {(empleado) => (
            <TableRow key={empleado.id}>
              <TableCell>
                <h3 className="text-slate-800">{empleado.nickname}</h3>
                <span className="text-xs text-slate-800">{empleado.email}</span>
              </TableCell>
              <TableCell>
                <p className="text-slate-800">{empleado.permisos}</p>
              </TableCell>
              <TableCell>
                <WrapperBtnAccionesTabla>
                  <>
                    <ModalEditarEmpleado empleado={empleado} />
                    <ModalEliminarEmpleado empleado={empleado} />
                  </>
                </WrapperBtnAccionesTabla>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default TablaEmpleados;
