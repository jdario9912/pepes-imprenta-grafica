import { pool } from "@/db/mysql";
import { noAutorizadoResponse } from "@/libs/api/responses";
import { FieldPacket, ProcedureCallPacket, ResultSetHeader, } from "mysql2";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    
    // const session = await getServerSession();
  
    // if (!session) return noAutorizadoResponse();
  
    const [rows]: [ResultSetHeader[], FieldPacket[]] = await pool.query("CALL buscar_ordenes_pendientes()")

    const pendientes = rows.filter((row) => row.affectedRows > 0)

    return NextResponse.json(pendientes);
  } catch (error) {
    console.log(error);
    return NextResponse.json("algo salio mal en ordenes pendientes")
    
  }
};
