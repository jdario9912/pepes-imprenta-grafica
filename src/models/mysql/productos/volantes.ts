import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import type { Volantes } from "@/types/recursos/productos";
import type { ResultSetHeader } from "mysql2/promise";

export class VolantesModel {
  static async crear(input: Volantes): Promise<Id> {
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
      tipo,
      tamano,
      cantidad,
      impresion,
      ubicacion_diseno,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO volantes (
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
      tipo,
      tamano,
      cantidad,
      impresion,
      ubicacion_diseno
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
        tipo,
        tamano,
        cantidad,
        impresion,
        ubicacion_diseno,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarOrden();

    
    return respuesta.insertId;
  }

  static async obtener(id: Id): Promise<Volantes | null> {
    const [orden]: any[] = await pool.query(
      "SELECT * FROM volantes WHERE id = ?",
      [id]
    );

    return orden ? (orden[0] as Volantes) : null;
  }

  static async actualizar(id: Id, input: Volantes): Promise<boolean> {
    const [result] = await pool.query("UPDATE volantes SET ? WHERE = ?", [
      input,
      id,
    ]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM volantes WHERE id = ?", [id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }
}
