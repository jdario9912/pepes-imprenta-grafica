import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import type { Loma } from "@/types/recursos/productos";
import type { ResultSetHeader } from "mysql2/promise";

export class LomaModel {
  static async crear(input: Loma): Promise<Id> {
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
      material,
      orientacion,
      bolsillo,
      corte,
      ojales,
      troquelado,
      portabaner,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO loma (
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
      material,
      orientacion,
      bolsillo,
      corte,
      ojales,
      troquelado,
      portabaner
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
        material,
        orientacion,
        bolsillo,
        corte,
        ojales,
        troquelado,
        portabaner,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarOrden();

    return respuesta.insertId
  }

  static async obtener(id: Id): Promise<Loma | null> {
    const [orden]: any[] = await pool.query(
      "SELECT * FROM loma WHERE id = ?",
      [id]
    );

    return orden ? (orden[0] as Loma) : null;
  }

  static async actualizar(id: Id, input: Loma): Promise<boolean> {
    const [result] = await pool.query("UPDATE loma SET ? WHERE id = ?", [
      input,
      id,
    ]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM loma WHERE id = ?", [id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }
}
