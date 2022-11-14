import React, { useState, useEffect } from "react";
import CandidateParty from "./CandidateParty";
import ProgressBar from "./ProgressBar";

const CandidateCard = ({ candidates, party }) => {
  const totalVotes =
    candidates &&
    candidates.reduce((prev, current) => {
      return prev + current.votes;
    }, 0);

  return (
    <div className="candidate-card">
      <div className="candidate-card-wrapper">
        {candidates &&
          candidates
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
