import { pool } from "@/db/mysql";
import { errorGuardarEmpleado } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import { FieldPacket, ResultSetHeader } from "mysql2/promise";

export class EmpleadosModel {
  static async crear(empleado: Empleado): Promise<Id> {
    const { nickname, email, password, permisions } = empleado;

    const [result] = await pool.query(
      `INSERT INTO empleados 
      (nickname, email, password, permisions) VALUES 
      (?, ?, ?, ?)`,
      [nickname, email, password, permisions]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarEmpleado();

    return respuesta.insertId;
  }

  static async obtenerTodos() {
    const [empleados] = await pool.query(
      "SELECT id, nickname, email, permisions FROM empleados"
    );
    return empleados;
  }

  static async obtenerUno(id: Id): Promise<Empleado | null> {
    const [empleado]: any[] = await pool.query(
      "SELECT id, nickname, email, permisions FROM empleados WHERE id = ?",
      [id]
    );
    return empleado ? (empleado[0] as Empleado) : null;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "DELETE FROM empleados WHERE id = ?",
      [id]
    );

    return result.affectedRows > 0;
  }

  static async actualizar(id: Id, input: Empleado): Promise<boolean> {
    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "UPDATE empleados SET ? WHERE id = ?",
      [input, id]
    );

    return result.affectedRows > 0;
  }
}
