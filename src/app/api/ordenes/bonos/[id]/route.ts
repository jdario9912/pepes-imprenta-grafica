import { BonosModel } from "@/models/mysql/productos/bonos";
import { IdParam } from "@/types/params";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, { params }: any) => {
  const id = params as IdParam;

  return NextResponse.json(id);
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  const id = params as IdParam;
  const body = await req.json();

  await BonosModel.actualizar(id, body)

  return NextResponse.json({ id, body });
};

export const DELETE = async (_: NextRequest, { params }: any) => {
  const id = params as IdParam;

  return NextResponse.json(id);
};
