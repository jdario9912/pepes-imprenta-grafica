import { pool } from "@/db/mysql";
import { errorGuardarCliente } from "@/libs/api/errors";
import { Id } from "@/types/params";
import { FieldPacket, ResultSetHeader } from "mysql2/promise";

export class ClientesModel {
  static async crear(cliente: Cliente): Promise<Id> {
    const { nombre, telefono, email, observaciones } = cliente;

    const [result] = await pool.query(
      `INSERT INTO clientes 
      (nombre, telefono, email, observaciones) VALUES 
      (?, ?, ?, ?)`,
      [nombre, telefono, email, observaciones]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarCliente();

    return respuesta.insertId;
  }

  static async obtenerTodos() {
    const [clientes] = await pool.query("SELECT * FROM clientes");
    return clientes;
  }

  static async obtenerUno(id: Id): Promise<Cliente | null> {
    const [cliente]: any[] = await pool.query(
      "SELECT * FROM clientes WHERE id = ?",
      [id]
    );
    return cliente ? (cliente[0] as Cliente) : null;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "DELETE FROM clientes WHERE id = ?",
      [id]
    );

    return result.affectedRows > 0;
  }

  static async actualizar(id: Id, input: Cliente): Promise<boolean> {
    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "UPDATE clientes SET ? WHERE id = ?",
      [input, id]
    );

    return result.affectedRows > 0;
  }

  static async buscarPorNombre(nombre: string): Promise<Cliente[] | null> {
    const [clientes]: any[] = await pool.query(
      `SELECT * FROM clientes WHERE nombre LIKE '%${nombre}%'`
    );
    return clientes ? (clientes as Cliente[]) : null;
  }

  static async buscarPorTelefono(telefono: string): Promise<Cliente[] | null> {
    const [clientes]: any[] = await pool.query(
      `SELECT * FROM clientes WHERE telefono LIKE '%${telefono}%'`
    );

    console.log(clientes);
    
    return clientes ? (clientes as Cliente[]) : null;
  }
}
