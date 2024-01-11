import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/responses";
import { IdParam } from "@/types/params";
import { Volantes } from "@/types/productos";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";

export class VolantesModel {
  static async crear(input: Volantes): Promise<Volantes | Error> {
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
      `INSERT INTO volantes (
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

    if (respuesta.affectedRows === 0) return errorGuardarOrden();

    const [registro]: [RowDataPacket[], FieldPacket[]] = await pool.query(
      "SELECT * FROM volantes WHERE id = ?",
      [respuesta.insertId]
    );

    const impresionesNuevo: RowDataPacket = registro[0];

    const impresionesRegistrado: Volantes = impresionesNuevo as Volantes;

    return impresionesRegistrado;
  }

  static async obtener(id: IdParam) {}

  static async actualizar(id: IdParam) {}

  static async eliminar(id: IdParam) {}
}
