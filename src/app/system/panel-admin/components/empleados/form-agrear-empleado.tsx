import { formatoOpcion } from "@/app/system/libs/formate-opciones-input-select";
import { iconos } from "@/components/icons";
import { permisosEmpleado } from "@/libs/listas";
import {
  Button,
  Input,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { agregarEmpleado } from "../../libs/server-actions";
import { errorToast, succesToast } from "@/libs/client/toast";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = { onClose: () => void };

type InputsFields = Omit<Empleado, "id">;

const FormAgregarEmpleado = ({ onClose }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    resetField,
    setValue,
  } = useForm<InputsFields>({
    defaultValues: {
      permisos: "user",
    },
  });

  const onSubmit: SubmitHandler<InputsFields> = async (data) => {
    try {
      await agregarEmpleado(data);

      const params = new URLSearchParams(searchParams);

      params.set("revalidar", "true");

      replace(`${pathname}?${params.toString()}`);

      onClose();

      succesToast(`${data.nickname} fue agregado.`);
    } catch (error) {
      errorToast(`Ocurrió un error un error al agregar a ${data.nickname}.`);
      onClose();
    }
  };

  return (
    <ModalContent>
      {(onClose) => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader className="flex flex-col gap-1 text-slate-700">
            Agregar empleado
          </ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              endContent={iconos.persona}
              label="nickname"
              color="primary"
              variant="flat"
              {...register("nickname")}
            />

            <Input
              endContent={iconos.email}
              label="email"
              placeholder="user@email.com"
              color="primary"
              variant="flat"
              {...register("email")}
            />

            <Input
              endContent={iconos.lock}
              label="contraseña"
              placeholder="******"
              type="password"
              color="primary"
              variant="flat"
              {...register("password")}
            />

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
                    options={permisosEmpleado.map((opcion) =>
                      formatoOpcion(opcion)
                    )}
                    classNames={{
                      container: () =>
                        errors.permisos ? "border border-danger border-2" : "",
                    }}
                    defaultValue={formatoOpcion("user")}
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
            <div className="flex py-2 px-1 justify-between"></div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" variant="bordered" onPress={onClose}>
              cancelar
            </Button>
            <Button
              type="submit"
              color="primary"
              onPress={onClose}
              startContent={iconos.guardar}
            >
              guardar
            </Button>
          </ModalFooter>
        </form>
      )}
    </ModalContent>
  );
};

export default FormAgregarEmpleado;
