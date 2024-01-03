import { NextResponse } from "next/server"

export const GET = async () => {
  // obtener todas las ordenes
  return NextResponse.json("obteniendo todas las ordenes")
}
