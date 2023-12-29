import { pool } from "@/app/db/mysql";
import { ResultSetHeader } from "mysql2/promise";

export class ClientesModel {
  static async crear(cliente: Cliente): Promise<ClienteCreado | Error> {
    const { nombre, telefono, email, observaciones } = cliente;

    const [result] = await pool.query(
      "INSERT INTO clientes (nombre, telefono, email, observaciones) VALUES (?, ?, ?, ?)",
      [nombre, telefono, email, observaciones]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0)
      return new Error("No se pudo guardar el cliente.");

    return { ...cliente, id: respuesta.insertId };
  }

  static async obtenerTodos() {}

  static async obtenerUno() {}
}
