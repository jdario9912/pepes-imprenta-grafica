import { Id } from "@/types/params";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, { params }: any) => {
  const { id }: { id: Id } = params;


  // quiza la utilize para el buscador
  // cambiar el nombre de la carpeta 
  return NextResponse.json(`obteniendo orden ${id}`);
};
