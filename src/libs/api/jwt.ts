import jwt, { Jwt } from "jsonwebtoken";
import { jwtSecret } from "@/config";
import { jwtVerify } from "jose";
import { EmpleadosModel } from "@/models/mysql/empleados";
import { unknown } from "zod";

export const generarToken = async (
  dataToken: EmpleadoDataToken
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(dataToken, jwtSecret, { expiresIn: "12h" }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token || "");
      }
    });
  });
};

export const validarToken = async (token: string) => {
  try {
    await jwtVerify(token, new TextEncoder().encode(jwtSecret));
  } catch (error) {
    throw new Error("Token invalida.");
  }
};

export const dataDesdeToken = (token: string): EmpleadoDataToken => {
  const decodedToken = jwt.decode(token, jwtSecret) as unknown;

  return decodedToken as EmpleadoDataToken;
};
