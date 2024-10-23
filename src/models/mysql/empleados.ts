import { pool } from "@/db/mysql";
import { checkPass, hashPass } from "@/libs/api/bcrypt";
import { errorGuardarEmpleado } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import { FieldPacket, ResultSetHeader } from "mysql2/promise";

export class EmpleadosModel {
  static async crear(empleado: Empleado): Promise<Id> {
    const { nickname, email, password, permisos } = empleado;

    const [result] = await pool.query(
      `INSERT INTO empleados 
      (nickname, email, password, permisos) VALUES 
      (?, ?, ?, ?)`,
      [nickname, email, hashPass(password), permisos]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarEmpleado();

    return respuesta.insertId;
  }

  static async obtenerTodos() {
    const [empleados] = await pool.query(
      "SELECT id, nickname, email, permisos FROM empleados"
    );
    return empleados;
  }

  static async obtenerUno(id: Id): Promise<Empleado | null> {
    const [empleado]: any[] = await pool.query(
      "SELECT id, nickname, email, permisos FROM empleados WHERE id = ?",
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
    const { password, ...resEmpleado } = input;
    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "UPDATE empleados SET ? WHERE id = ?",
      [resEmpleado, id]
    );

    return result.affectedRows > 0;
  }

  static async login(emailInput: string, passwordInput: string) {
    const [result]: any[] = await pool.query(
      "SELECT * FROM empleados WHERE email = ?",
      [emailInput]
    );

    const empleado = result[0] as Empleado;

    if (!empleado)
      throw new Error("No hay usuarios registrados con ese email.");

    const { id, nickname, permisos, email, password } = empleado;

    const checkedPass = await checkPass(password, passwordInput);

    if (!checkedPass) throw new Error("Contraseña incorrecta.");

    return { id, name: nickname, permisos, email, image: "" };
  }

  static async isAdmin(email: string): Promise<boolean> {
    const [usuario]: any[] = await pool.query(
      "SELECT permisos FROM empleados WHERE email = ?",
      [email]
    );

    usuario ? (usuario[0] as Empleado) : null;

    const empleado = usuario[0];

    return empleado.permisos === "admin";
  }

  static async actualizarPassword(id: Id, password: string): Promise<boolean> {
    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "UPDATE empleados SET password = ? WHERE id = ?",
      [hashPass(password), id]
    );

    return result.affectedRows > 0;
  }
}
