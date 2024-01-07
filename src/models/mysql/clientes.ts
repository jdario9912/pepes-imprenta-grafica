import { pool } from "@/db/mysql";
import { errorGuardarCliente } from "@/libs/api/responses";
import { IdParam } from "@/types/params";
import { FieldPacket, ResultSetHeader } from "mysql2/promise";

export class ClientesModel {
  static async crear(cliente: Cliente): Promise<ClienteRegistrado | Error> {
    const { nombre, telefono, email, observaciones } = cliente;

    const [result] = await pool.query(
      "INSERT INTO clientes (nombre, telefono, email, observaciones) VALUES (?, ?, ?, ?)",
      [nombre, telefono, email, observaciones]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) return errorGuardarCliente()

    return { ...cliente, id: respuesta.insertId };
  }

  static async obtenerTodos() {
    const [clientes] = await pool.query("SELECT * FROM clientes");
    return clientes;
  }

  static async obtenerUno(id : IdParam): Promise<ClienteRegistrado | null> {
    const [cliente]: any[] = await pool.query(
      "SELECT * FROM clientes WHERE id = ?",
      [id]
    );
    return cliente ? (cliente[0] as ClienteRegistrado) : null;
  }

  static async eliminar(id : IdParam): Promise<boolean> {
    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "DELETE FROM clientes WHERE id = ?",
      [id]
    );

    return result.affectedRows > 0;
  }

  static async actualizar(id: IdParam, input: Cliente): Promise<boolean> {
    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "UPDATE clientes SET ? WHERE id = ?",
      [input, id]
    );

    return result.affectedRows > 0;
  }
}
