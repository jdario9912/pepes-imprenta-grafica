import { useFormContext } from "react-hook-form";

export const ConnectForm = ({ children }: { children: any }) => {
  const methods = useFormContext<Cuerpo>();

  methods.setValue("cabeza", "pelada");

  return (
    <div>
      <label>
        manos
        <input
          className="bg-red-200"
          type="date"
          {...methods.register("manos", { required: "manos obligatorias" })}
        />
        {methods.formState.errors.manos && (
          <span className="text-red-600 text-sm">
            las manos son obligatorias
          </span>
        )}
      </label>

      <label>
        pies
        <input
          className="bg-red-200"
          type="text"
          {...methods.register("pies")}
        />
      </label>
      {children({ ...methods })}
      <button className="bg-blue-300">enviar</button>
    </div>
  );
};
