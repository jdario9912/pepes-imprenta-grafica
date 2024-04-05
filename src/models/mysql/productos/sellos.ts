import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import type { Sellos } from "@/types/recursos/productos";
import type { ResultSetHeader } from "mysql2/promise";

export class SellosModel {
  static async crear(input: Sellos): Promise<Id> {
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
      tamano,
      tipo,
      dibujo,
      texto,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO sellos (
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
      tamano,
      tipo,
      dibujo,
      texto
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
        tamano,
        tipo,
        dibujo,
        texto,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarOrden();

    return respuesta.insertId;
  }

  static async obtener(id: Id): Promise<Sellos | null> {
    const [orden]: any[] = await pool.query(
      "SELECT * FROM sellos WHERE id = ?",
      [id]
    );

    return orden ? (orden[0] as Sellos) : null;
  }

  static async actualizar(id: Id, input: Sellos): Promise<boolean> {
    const [result] = await pool.query("UPDATE sellos SET ? WHERE id = ?", [
      input,
      id,
    ]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM sellos WHERE id = ?", [id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }
}
