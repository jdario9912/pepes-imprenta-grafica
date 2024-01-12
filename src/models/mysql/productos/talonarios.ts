import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorGuardarOrden } from "@/libs/api/responses";
import { IdParam } from "@/types/params";
import { Talonarios } from "@/types/productos";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";

export class TalonariosModel {
  static async crear(input: Talonarios): Promise<Talonarios | Error> {
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

    if (respuesta.affectedRows === 0) return errorGuardarOrden();

    const [registro]: [RowDataPacket[], FieldPacket[]] = await pool.query(
      "SELECT * FROM talonarios WHERE id = ?",
      [respuesta.insertId]
    );

    const impresionesNuevo: RowDataPacket = registro[0];

    const impresionesRegistrado: Talonarios = impresionesNuevo as Talonarios;

    return impresionesRegistrado;
  }

  static async obtener(id: IdParam) {}

  static async actualizar(id: IdParam) {}

  static async eliminar(id: IdParam) {}
}
