"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="">
        <Input type="email" label="email" isRequired color="default" />
      </main>
    </NextUIProvider>
  );
}
