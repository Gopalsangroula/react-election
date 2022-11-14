import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { party } from "../data/data";
import PartyCard from "./PartyCard";
import StateResults from "./StateResults";

const ElectionTab = ({ partyData }) => {
  const partyUrl = "https://election.lokpath.com/api/party";

  const [parties, setParties] = useState();

  const fetchParty = async () => {
    await fetch(partyUrl)
      .then((res) => res.json())
      .then((data) => {
        setParties(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchParty();
  }, []);

  return (
    <section className="election-tab-section tab-section">
      <h1 className="tab-title section-title">दलहरुको जीत परिणाम</h1>
      <Tabs variant="soft-rounded" colorScheme={"red"}>
        <TabList>
          <Tab fontWeight="700">प्रतिनिधिसभा</Tab>
          <Tab fontWeight="700">प्रदेशसभा</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
          <TabPanel>
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
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default ElectionTab;
