import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import PartySelect from "../../components/PartySelect";
import dataContext from "../../context/dataContext";

const Party = () => {
  const { party, candidates, districts, constituencies, loading } =
    useContext(dataContext);

  const { partyId } = useParams();

  const filteredParty = party?.filter((p) => p.id === parseInt(partyId));

  const filteredCandidates = candidates?.filter(
    (c) => c.party_id === parseInt(partyId)
  );

  const filteredDistricts = districts?.filter((d) =>
    filteredCandidates?.find((f) => f.district_id === d.id)
  );

  const hello = filteredCandidates & filteredDistricts && [
    ...filteredCandidates,
    ...filteredDistricts,
  ];

  console.log(filteredCandidates);
  console.log(filteredParty);
  console.log(filteredDistricts);
  console.log(hello);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [partyId]);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="party-page">
          <div className="container">
            <PartySelect />
            {filteredParty?.map((p, i) => (
              <div className="party-header">
                <div>
                  <div className="img-container">
                    <img src={p.party_img} alt={p.party_name} key={i} />
                  </div>
                  <h1 className="party-header-title">{p.party_name}</h1>
                </div>
                {/* <p dangerouslySetInnerHTML={{ __html: p.party_desc }}></p> */}
              </div>
            ))}
            <div className="party-details-section">
              <div className="data-container">
                <div className="table-title-section">
                  <div className="name">उम्मेदवारहरु</div>
                  <div className="party">पार्टी</div>
                  <div className="votes">मत</div>
                  {/* <div className="candidate-from">Candidate From</div> */}
                  <div className="result">परिणाम</div>
                </div>
                {filteredCandidates &&
                  filteredCandidates.map((f, i) => (
                    <div className="single-row" key={i}>
                      <span className="name">{f.candidate_names}</span>
                      <span className="party">
                        {filteredParty && filteredParty[0].party_name}
                      </span>
                      <span className="votes">{f.votes}</span>
                      {/* <span className="candidate-from">{f.candidateFrom}</span> */}
                      <span className="candidate-from">
                        {f.election === "unelected" ? "हरुवा" : "विजयी"}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Party;
