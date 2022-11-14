import React, { useState, useContext } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import PartyCard from "./PartyCard";
import StateResults from "./StateResults";
import { party } from "../data/data";
import dataContext from "../context/dataContext";

const ProvinceTab = () => {
  const { provinces, part } = useContext(dataContext);

  return (
    <section className="province-tab-section tab-section">
      <h1 className="tab-title section-title">
        प्रदेशहरुमा दलहरुको जीत परिणाम
      </h1>
      <Tabs variant="soft-rounded" colorScheme={"red"}>
        <TabList>
          {provinces &&
            provinces.map((p, i) => (
              <Tab fontWeight="700" key={i}>
                {p.province}
              </Tab>
            ))}
        </TabList>
        <TabPanels>
          {provinces &&
            provinces.map((p, i) => (
              <TabPanel key={i}>
                <section className="party-section">
                  <div className="party-section-wrapper">
                    <div>
                      {party && (
                        <>
                          <PartyCard data={party} />
                          <StateResults info={party} />
                        </>
                      )}
                    </div>
                  </div>
                </section>
              </TabPanel>
            ))}
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default ProvinceTab;
