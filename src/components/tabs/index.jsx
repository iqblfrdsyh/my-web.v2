"use client";

import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { portofolio } from "@/data/portofolio";
import Cards from "../cards";

const TabsPorto = () => {
  const [selected, setSelected] = useState("Web Project");

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        variant="underlined"
        color="warning"
        className="mx-auto"
      >
        <Tab key="Web Project" title="Web Project">
          <div className="flex flex-wrap gap-5 justify-center">
            {portofolio.map((data) => (
              <Cards.CardPorto
                key={data.id}
                title={data.title}
                subtitle={data.subtitle}
                number={data.id}
                image={data.image}
              />
            ))}
          </div>
        </Tab>

        <Tab key="Web Design" title="Web Design">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsPorto;
