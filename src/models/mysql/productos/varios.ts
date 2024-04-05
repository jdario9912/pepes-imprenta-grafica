import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import type { Varios } from "@/types/recursos/productos";
import type { ResultSetHeader } from "mysql2/promise";

export class VariosModel {
  static async crear(input: Varios): Promise<Id> {
    const {
      id_cliente,
      atendido_por,
      fecha_entrega,
      hora_entrega,
      muestra,
      observaciones,
      total,
      entrega,
      estado,
      metodo_pago,
      detalle,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO varios (
      id_cliente,
      nro_orden,
      atendido_por,
      fecha_entrega,
      hora_entrega,
      muestra,
      observaciones,
      total,
      entrega,
      estado,
      metodo_pago,
      detalle
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    )`,
      [
        id_cliente,
        generarNumeroOrden(),
        atendido_por,
        fecha_entrega,
        hora_entrega,
        muestra,
        observaciones,
        total,
        entrega,
        estado,
        metodo_pago,
        detalle,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarOrden();

    
    return respuesta.insertId;
  }

  static async obtener(id: Id): Promise<Varios | null> {
    const [orden]: any[] = await pool.query(
      "SELECT * FROM varios WHERE id = ?",
      [id]
    );

    return orden ? (orden[0] as Varios) : null;
  }

  static async actualizar(id: Id, input: Varios): Promise<boolean> {
    const [result] = await pool.query("UPDATE varios SET ? WHERE id = ?", [
      input,
      id,
    ]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM varios WHERE id = ?", [id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }
}
