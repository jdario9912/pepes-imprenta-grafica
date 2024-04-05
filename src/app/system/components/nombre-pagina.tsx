import { kosugiMaruFont } from "@/app/fonts";
import classNames from "classnames";

const NombrePagina = ({ nombre }: { nombre: string }) => (
  <div className="p-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-br shadow-md">
    <p
      className={classNames(
        "text-4xl text-white dark:text-slate-300",
        kosugiMaruFont.className
      )}
    >
      {nombre}
    </p>
  </div>
);

export default NombrePagina;