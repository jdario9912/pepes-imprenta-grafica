import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const errorResponse = (error: unknown) => {
  if (error instanceof ZodError)
    return NextResponse.json({ mensaje: "Datos invalidos." }, { status: 400 });

  if (error instanceof Error)
    return NextResponse.json({ mensaje: "Algo salio mal." }, { status: 500 });
};

export const cliente404Response = () =>
  NextResponse.json(
    { mensaje: "El cliente no esta registrado." },
    { status: 404 }
  );

export const errorGuardarCliente = () => new Error("No se pudo guardar el cliente.");

export const errorGuardarOrden = () => new Error("No se pudo guardar la orden.");