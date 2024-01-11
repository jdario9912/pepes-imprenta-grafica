import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/responses";
import { IdParam } from "@/types/params";
import { Plotter } from "@/types/productos";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";

export class PlotterModel {
  static async crear(input: Plotter): Promise<Plotter | Error> {
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
      tamano,
      color,
      material,
      terminacion,
    } = input;

    const [result] = await pool.query(
      `INSERT INTO plotter (
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
      tamano,
      color,
      material,
      terminacion
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
        ubicacion_archivo,
        observaciones,
        total,
        entrega,
        estado,
        metodo_pago,
        tamano,
        color,
        material,
        terminacion,
      ]
    );

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) return errorGuardarOrden();

    const [registro]: [RowDataPacket[], FieldPacket[]] = await pool.query(
      "SELECT * FROM plotter WHERE id = ?",
      [respuesta.insertId]
    );

    const plotterNuevo: RowDataPacket = registro[0];

    const plotterRegistrado: Plotter = plotterNuevo as Plotter;

    return plotterRegistrado;
  }

  static async obtener(id: IdParam) {}

  static async actualizar(id: IdParam) {}

  static async eliminar(id: IdParam) {}
}
