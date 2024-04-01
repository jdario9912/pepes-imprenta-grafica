// buscar una fuente copada
import classNames from "classnames";
import { Kosugi_Maru } from "next/font/google";

const kosugiMaru = Kosugi_Maru({ weight: ["400"], subsets: ["latin"] });

const NombrePagina = ({ nombre }: { nombre: string }) => (
  <div className="rounded-md bg-slate-400 p-2 dark:bg-slate-700">
    <p className={classNames("text-4xl text-white dark:text-slate-300", kosugiMaru.className)}>
      {nombre}
    </p>
  </div>
);

export default NombrePagina;
