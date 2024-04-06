"use client";

import Select from "react-select";
import { iconos } from "@/components/icons";
import { errorToast, succesToast } from "@/libs/client/toast";
import { Button } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { permisosEmpleado } from "@/libs/listas";
import { formatoOpcion } from "@/app/system/libs/formate-opciones-input-select";
import { cambiarPermisos } from "../../libs/server-actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = { id: number; permisos: string };

const FormCambiarPermisosEmpleado = ({ id, permisos }: Props) => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { handleSubmit, formState, resetField, setValue, control } =
    useForm<Pick<Empleado, "permisos">>();
  const { isLoading, errors } = formState;

  const onSubmit: SubmitHandler<Pick<Empleado, "permisos">> = async (data) => {
    try {
      setLoading(true);

      await cambiarPermisos(id, data.permisos);

      const params = new URLSearchParams(searchParams);

      params.set("revalidar", id.toString());

      replace(`${pathname}?${params.toString()}`);

      succesToast("Permiso actualizado.");

      setLoading(false);
    } catch {
      errorToast("Algo salió mal.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-2">
      <Controller
        name="permisos"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Selecciona los permisos de ususario.",
          },
        }}
        render={() => (
          <label className="flex items-center gap-x-2">
            <p className="first-letter:capitalize text-xs">Permisos</p>
            <Select
              options={permisosEmpleado.map((opcion) => formatoOpcion(opcion))}
              classNames={{
                container: () =>
                  errors.permisos ? "border border-danger border-2" : "",
              }}
              defaultValue={formatoOpcion(permisos)}
              onChange={(e) => {
                resetField("permisos");
                setValue("permisos", e?.value!);
              }}
              styles={{
                container: (styles) => {
                  styles.width = "100%";
                  return styles;
                },
                menu: (styles) => {
                  styles.zIndex = 15;
                  return styles;
                },
              }}
              menuPlacement="top"
            />
          </label>
        )}
      />

      <Button
        color="primary"
        variant="solid"
        type="submit"
        startContent={iconos.guardar}
        isLoading={isLoading}
        isDisabled={isLoading}
        isIconOnly
      />
    </form>
  );
};

export default FormCambiarPermisosEmpleado;
