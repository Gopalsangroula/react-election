import React, { useState, useEffect, useContext } from "react";
import CandidateParty from "./CandidateParty";
import ProgressBar from "./ProgressBar";
import dataContext from "../context/dataContext";

const CandidateCard = ({ candidates, party, assemblyId }) => {
  const { assemblyCandidates } = useContext(dataContext);

  const filteredAssembly =
    candidates && candidates.filter((a) => a.assem_id === assemblyId);

  console.log(filteredAssembly);

  const totalVotes =
    candidates &&
    candidates.reduce((prev, current) => {
      return prev + current.votes;
    }, 0);

  return (
    <div className="candidate-card">
      <div className="candidate-card-wrapper">
        {filteredAssembly &&
          filteredAssembly
            // .sort((a, b) => (a.votes < b.votes ? 1 : -1))
            .slice(0, 5)
            .map((d, i) => (
              <div className="single-row" key={i}>
                <div className="card-top">
                  <div className="card-left">
                    <img src={d.candidate_imgs} alt={d.candidate_names} />
                    <div>
                      <span>{d.candidate_names}</span>
                      <CandidateParty
                        id={d.party_id}
                        parties={party && party}
                      />
                    </div>
                  </div>
                  <div className="card-right">
                    <span>मत</span>
                    <span>{d.votes.toLocaleString()}</span>
                  </div>
                </div>
                <ProgressBar percent={(d.votes / totalVotes) * 100} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default CandidateCard;
