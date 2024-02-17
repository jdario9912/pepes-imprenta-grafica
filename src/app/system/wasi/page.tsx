"use client";

import {
  FormProvider,
  useForm,
} from "react-hook-form";
import { FutbolistaForm } from "./components/futbolista-form";

const Page = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <FutbolistaForm />
      </form>
    </FormProvider>
  );
};

export default Page;
