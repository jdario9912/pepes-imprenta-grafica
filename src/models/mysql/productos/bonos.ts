import { pool } from "@/db/mysql";
import { generarNumeroOrden } from "@/libs/api/nro-orden";
import { errorActualizarOrden, errorGuardarOrden } from "@/libs/api/responses";
import { Id } from "@/types/params";
import { Bonos } from "@/types/recursos/productos";
import { ResultSetHeader } from "mysql2/promise";

export class BonosModel {
  static async crear(input: Bonos): Promise<Id | Error> {
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

    return respuesta.insertId;
  }

  static async obtener(id: Id) {}

  static async actualizar(id: Id, input: Bonos): Promise<Id | Error> {
    const [result] = await pool.query("UPDATE bonos SET ? WHERE = ?", [input, id]);

    const respuesta: ResultSetHeader = result as ResultSetHeader;

    if (respuesta.affectedRows === 0) return errorActualizarOrden();

    return id;
  }

  static async eliminar(id: Id) {}
}
