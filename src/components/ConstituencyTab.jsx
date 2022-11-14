import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CandidateCard from "./CandidateCard";
import AssemblyCandidateCard from "./AssemblyCandidateCard";
import dataContext from "../context/dataContext";
import { useContext } from "react";

const ConstituencyTab = ({ constituency }) => {
  const { assembly, candidates, party, assemblyCandidates } =
    useContext(dataContext);

  const filteredAssembly =
    assembly && assembly.filter((a) => a.represent_id === constituency.id);

  const filteredCandidates =
    candidates && candidates.filter((c) => c.represent_id === constituency.id);

  const filteredAssemblyCandidates = assemblyCandidates.filter(
    (f) => f.represent_id === constituency.id
  );

  console.log(filteredCandidates);

  console.log(filteredAssemblyCandidates);

  return (
    <section className="constituency-tab-section tab-section">
      <Tabs p={0} variant="soft-rounded" colorScheme={"red"}>
        <TabList>
          <Tab fontWeight="900">प्रतिनिधिसभा</Tab>
          <Tab fontWeight="900">प्रदेशसभा</Tab>
        </TabList>
        <TabPanels p={0}>
          <TabPanel>
            <CandidateCard
              candidates={filteredCandidates && filteredCandidates}
            />
          </TabPanel>
          <TabPanel>
            <div className="state-level-result">
              {filteredAssembly &&
                filteredAssembly.map((f, i) => (
                  <>
                    <AssemblyCandidateCard
                      key={i}
                      candidates={
                        filteredAssemblyCandidates && filteredAssemblyCandidates
                      }
                      assemblyId={f.id}
                    />
                  </>
                ))}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default ConstituencyTab;
