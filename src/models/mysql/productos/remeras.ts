import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import type { Remeras } from "@/types/recursos/productos";
import type { ResultSetHeader } from "mysql2/promise";

export class RemerasModel {
  static async crear(input: Remeras): Promise<Id> {
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
      color,
      talles,
      estampa_espalda,
      estampa_pecho,
      cantidad,
      color_estampa,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO remeras (
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
      talles,
      color,
      estampa_pecho,
      estampa_espalda,
      color_estampa,
      cantidad
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
        talles,
        color,
        estampa_pecho,
        estampa_espalda,
        color_estampa,
        cantidad,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarOrden();

    return respuesta.insertId;
  }

  static async obtener(id: Id): Promise<Remeras | null> {
    const [orden]: any[] = await pool.query(
      "SELECT * FROM remeras WHERE id = ?",
      [id]
    );

    return orden ? (orden[0] as Remeras) : null;
  }

  static async actualizar(id: Id, input: Remeras): Promise<boolean> {
    const [result] = await pool.query("UPDATE remeras SET ? WHERE = ?", [
      input,
      id,
    ]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM remeras WHERE id = ?", [id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }
}
