import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import type { Bonos } from "@/types/recursos/productos";
import type { ResultSetHeader } from "mysql2/promise";

export class BonosModel {
  static async crear(input: Bonos): Promise<Id> {
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
      desde_numero,
      cantidad,
      numeradores,
      lotes,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO bonos (
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
      desde_numero,
      cantidad,
      numeradores,
      lotes
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
        observaciones,
        total,
        entrega,
        estado,
        metodo_pago,
        tipo,
        tamano,
        desde_numero,
        cantidad,
        numeradores,
        lotes,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarOrden();

    return respuesta.insertId;
  }

  static async obtener(id: Id): Promise<Bonos | null> {
    const [orden]: any[] = await pool.query(
      "SELECT * FROM bonos WHERE id = ?",
      [id]
    );

    return orden ? (orden[0] as Bonos) : null;
  }

  static async actualizar(id: Id, input: Bonos): Promise<boolean> {
    const [result] = await pool.query("UPDATE bonos SET ? WHERE id = ?", [
      input,
      id,
    ]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM bonos WHERE id = ?", [id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }
}
