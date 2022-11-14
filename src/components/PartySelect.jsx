import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataContext from "../context/dataContext";

const PartySelect = () => {
  const { partyId } = useParams();

  const [parties, setParty] = useState(partyId);

  const { party } = useContext(dataContext);

  const navigate = useNavigate();

  const partySelected = (e) => {
    setParty(e.target.value);
  };

  useEffect(() => {
    navigate(`/party/${parties}`);
  }, [parties]);

  return (
    <div className="party-selection-section">
      <div className="section-wrapper">
        <select
          name="partySelection"
          className="party-selection"
          defaultValue={parties}
          onChange={partySelected}
        >
          {party &&
            party.map((p, i) => (
              <option value={p.id} key={i}>
                {p.party_name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default PartySelect;
