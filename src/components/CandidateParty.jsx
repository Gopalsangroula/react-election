import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import dataContext from "../context/dataContext";

const CandidateParty = ({ id }) => {
  const { party } = useContext(dataContext);

  const filteredParty = party && party.find((p) => p.id === id);
  console.log(filteredParty);

  return (
    <React.Fragment>
      {filteredParty && (
        <div className="candidate-party">
          <Link to={`/party/${filteredParty.id}`}>
            <img src={filteredParty.party_img} alt={filteredParty.party_name} />
            <span>{filteredParty.party_name}</span>
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default CandidateParty;
