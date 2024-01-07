import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/responses";
import { IdParam } from "@/types/params";
import { Bonos } from "@/types/productos";
import {
  FieldPacket,
  OkPacketParams,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";

export class BonosModel {
  static async crear(input: Bonos): Promise<Bonos | Error> {
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

    if (respuesta.affectedRows === 0) return errorGuardarOrden();

    const [registro, a]: [RowDataPacket[], FieldPacket[]] = await pool.query(
      "SELECT * FROM bonos WHERE id = ?",
      [respuesta.insertId]
    );

    const bonoNuevo: RowDataPacket = registro[0];

    const bonoRegistrado: Bonos = bonoNuevo as Bonos;

    return bonoRegistrado;
  }

  static async obtener(id: IdParam) {}

  static async actualizar(id: IdParam) {}

  static async eliminar(id: IdParam) {}
}
