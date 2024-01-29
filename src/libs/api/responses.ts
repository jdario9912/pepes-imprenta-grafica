import { JsonWebTokenError } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const errorResponse = (error: any) => {
  if (error && (error.code || error.errno)) 
    return NextResponse.json({ mensaje: "Algo salio mal." }, { status: 400 });

  if (error instanceof ZodError)
    return NextResponse.json({ mensaje: "Datos invalidos." }, { status: 400 });

  if (error instanceof Error)
    return NextResponse.json({ mensaje: error.message }, { status: 500 });

  if (error instanceof JsonWebTokenError)
    return NextResponse.json({ mensaje: "Token invalida." }, { status: 401 });
};

export const cliente404Response = () =>
  NextResponse.json({ mensaje: "El cliente no existe." }, { status: 404 });

export const orden404Response = () =>
  NextResponse.json({ mensaje: "La orden no existe." }, { status: 404 });

export const empleado404Response = () =>
  NextResponse.json(
    { mensaje: "El cliente no está registrado." },
    { status: 404 }
  );
