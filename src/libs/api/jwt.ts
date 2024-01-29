import jwt from "jsonwebtoken";
import { jwtSecret } from "@/config";

export const generarToken = async (dataToken: EmpleadoDataToken): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      dataToken,
      jwtSecret,
      { expiresIn: "12h" },
      (error, token) => {
        if (error) {
          reject(error);
        } else {
          resolve(token || "");
        }
      }
    );
  });
};

export const validarToken = async (token: string): Promise<boolean | Error> => {
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, jwtSecret);
      resolve(true)
    } catch (error) {
      throw new Error("Token invalida.")
    }
  });
};
