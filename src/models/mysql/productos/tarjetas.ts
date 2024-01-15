import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import type { Tarjetas } from "@/types/recursos/productos";
import type { ResultSetHeader } from "mysql2/promise";

export class TarjetasModel {
  static async crear(input: Tarjetas): Promise<Id> {
    const {
      id_cliente,
      atendido_por,
      fecha_entrega,
      hora_entrega,
      muestra,
      ubicacion_archivo,
      observaciones,
      total,
      entrega,
      estado,
      metodo_pago,
      tipo,
      cantidad,
      papel,
      terminacion,
      puntas_redondeadas,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO tarjetas (
      id_cliente,
      nro_orden,
      atendido_por,
      fecha_entrega,
      hora_entrega,
      muestra,
      ubicacion_archivo,
      observaciones,
      total,
      entrega,
      estado,
      metodo_pago,
      tipo,
      cantidad,
      papel,
      terminacion,
      puntas_redondeadas
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
        ubicacion_archivo,
        observaciones,
        total,
        entrega,
        estado,
        metodo_pago,
        tipo,
        cantidad,
        papel,
        terminacion,
        puntas_redondeadas,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarOrden();


    return respuesta.insertId;
  }

  static async obtener(id: Id): Promise<Tarjetas | null> {
    const [orden]: any[] = await pool.query(
      "SELECT * FROM tarjetas WHERE id = ?",
      [id]
    );

    return orden ? (orden[0] as Tarjetas) : null;
  }

  static async actualizar(id: Id, input: Tarjetas): Promise<boolean> {
    const [result] = await pool.query("UPDATE tarjetas SET ? WHERE id = ?", [
      input,
      id,
    ]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM tarjetas WHERE id = ?", [id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }
}
