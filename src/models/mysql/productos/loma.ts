import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/responses";
import { IdParam } from "@/types/params";
import { Loma } from "@/types/productos";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";

export class LomaModel {
  static async crear(input: Loma): Promise<Loma | Error> {
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

    if (respuesta.affectedRows === 0) return errorGuardarOrden();

    const [registro]: [RowDataPacket[], FieldPacket[]] = await pool.query(
      "SELECT * FROM loma WHERE id = ?",
      [respuesta.insertId]
    );

    const lomaNuevo: RowDataPacket = registro[0];

    const lomaRegistrado: Loma = lomaNuevo as Loma;

    return lomaRegistrado;
  }

  static async obtener(id: IdParam) {}

  static async actualizar(id: IdParam) {}

  static async eliminar(id: IdParam) {}
}
