import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/errors";
import type { Id } from "@/types/params";
import type { Impresiones } from "@/types/recursos/productos";
import type { ResultSetHeader } from "mysql2/promise";

export class ImpresionesModel {
  static async crear(input: Impresiones): Promise<Id> {
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
      impresion,
      faz,
      tipo_papel,
      tamano_papel,
      orientacion,
      anillado,
      abrochado,
      corte,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO impresiones (
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
      impresion,
      faz,
      tipo_papel,
      tamano_papel,
      orientacion,
      anillado,
      abrochado,
      corte
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
        impresion,
        faz,
        tipo_papel,
        tamano_papel,
        orientacion,
        anillado,
        abrochado,
        corte,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) errorGuardarOrden();

    return respuesta.insertId;
  }

  static async obtener(id: Id): Promise<Impresiones | null> {
    const [orden]: any[] = await pool.query(
      "SELECT * FROM impresiones WHERE id = ?",
      [id]
    );

    return orden ? (orden[0] as Impresiones) : null;
  }

  static async actualizar(id: Id, input: Impresiones): Promise<boolean> {
    const [result] = await pool.query("UPDATE impresiones SET ? WHERE id = ?", [
      input,
      id,
    ]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }

  static async eliminar(id: Id): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM impresiones WHERE id = ?", [id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    return respuesta.affectedRows > 0;
  }
}
