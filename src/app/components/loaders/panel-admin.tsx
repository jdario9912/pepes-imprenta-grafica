import NombrePaginaLoader from "./nombre-pagina";
import TextLoader from "./text";

const PanelAdminLoader = () => (
  <div className="h-screen p-4">
    <NombrePaginaLoader />
    <div className="border border-slate-200 rounded-lg mt-8 p-4 overflow-hidden w-full h-1/2">
      <div className="flex gap-x-4">
        <TextLoader />
        <TextLoader />
      </div>
    </div>
  </div>
);

export default PanelAdminLoader;
