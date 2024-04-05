"use client";

import { Tab, Tabs } from "@nextui-org/react";
import TabEmpleados from "./empleados/tab-empleados";
import { iconos } from "@/components/icons";

const TabsAdmin = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" variant="underlined" color="primary">
        <Tab
          key="empleados"
          title={
            <div className="flex items-center p-2 gap-x-2">
              {iconos.empleados}
              <span className="text-xs">empleados</span>
            </div>
          }
        >
          <TabEmpleados />
        </Tab>
        <Tab
          key="graficas"
          title={
            <div className="flex items-center p-2 gap-x-2">
              {iconos.graficas}
              <span className="text-xs">gráficas</span>
            </div>
          }
        ></Tab>
      </Tabs>
    </div>
  );
};

export default TabsAdmin;
