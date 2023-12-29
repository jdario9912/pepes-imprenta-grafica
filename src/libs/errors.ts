import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const errorResponse = (error: unknown) => {
  if (error instanceof ZodError)
    return NextResponse.json({ mensaje: "Datos invalidos." }, { status: 400 });

  if (error instanceof Error)
    return NextResponse.json({ mensaje: "Algo salio mal." }, { status: 500 });
};
