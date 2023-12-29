import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
  return NextResponse.json("obteniendo un cliente");
};

export const PUT = async (req: NextApiRequest) => {
  return NextResponse.json("actualizando un cliente");
};

export const DELETE = async (req: NextApiRequest) => {
  return NextResponse.json("eliminando un cliente");
};
