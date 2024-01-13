import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import type { Talonarios } from "@/types/recursos/productos";
import type { ResultSetHeader } from "mysql2/promise";

export class TalonariosModel {
  static async crear(input: Talonarios): Promise<Id> {
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
      cantidad,
      tamano,
      modelo_anterior,
      tiene_logo,
      ubicacion_logo,
      numero_desde,
      puntillado_emblocado,
      color_duplicado,
      triplicado,
      color_triplicado,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO talonarios (
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
      cantidad,
      tamano,
      modelo_anterior,
      tiene_logo,
      ubicacion_logo,
      numero_desde,
      puntillado_emblocado,
      color_duplicado,
      triplicado,
      color_triplicado
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
        cantidad,
        tamano,
        modelo_anterior,
        tiene_logo,
        ubicacion_logo,
        numero_desde,
        puntillado_emblocado,
        color_duplicado,
        triplicado,
        color_triplicado,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarOrden();

    return respuesta.insertId;
  }

  static async obtener(id: Id): Promise<Talonarios | null> {
    const [orden]: any[] = await pool.query(
      "SELECT * FROM talonarios WHERE id = ?",
      [id]
    );

    return orden ? (orden[0] as Talonarios) : null;
  }

  static async actualizar(id: Id, input: Talonarios): Promise<boolean> {
    const [result] = await pool.query("UPDATE talonarios SET ? WHERE = ?", [
      input,
      id,
    ]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM talonarios WHERE id = ?", [id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }
}
