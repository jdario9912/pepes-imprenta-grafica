"use client";

import { iconos } from "@/components/icons";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const BtnSettingsAdmin = () => {
  const router = useRouter();
  const handleClick = () => router.push("/system/panel-admin");

  return (
    <Button isIconOnly color="primary" variant="light" onClick={handleClick}>
      {iconos.settings}
    </Button>
  );
};

export default BtnSettingsAdmin;
