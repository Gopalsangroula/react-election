import React, { useEffect, useState } from "react";
import NepalStateMap from "../../components/NepalStateMap";
import SearchForm from "../../components/SearchForm";
import DoughnutChart from "../../components/DoughnutChart";
import CandidateCard from "../../components/CandidateCard";
import PartyCard from "../../components/PartyCard";
import StateResults from "../../components/StateResults";
import { Link } from "react-router-dom";
import { candidates, party, apiUrl } from "../../data/data";
import { BsArrowRight } from "react-icons/bs";
import ProvinceTab from "../../components/ProvinceTab";
import ElectionTab from "../../components/ElectionTab";

import "./../../css/home.css";

const Home = () => {
  const [districtData, setDistrictData] = useState();
  const [partyData, setPartyData] = useState();

  // const districtFetch = async () => {

  //   await fetch(apiUrl + "/district")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDistrictData(data);
  //       console.log(data);
  //     });
  // };

  // const partyFetch = async () => {
  //   await fetch(`${apiUrl}/party`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPartyData(data);
  //       console.log(data);
  //     });
  // };

  // useEffect(() => {
  //   districtFetch();
  //   partyFetch();
  // }, []);

  return (
    <React.Fragment>
      <SearchForm />
      <div className="container">
        <NepalStateMap />
        <ElectionTab partyData={partyData} />
        <ProvinceTab partyData={partyData} />

        {partyData &&
          partyData.map((p, i) => (
            <>
              <div>
                <p dangerouslySetInnerHTML={{ __html: p.party_desc }}></p>
              </div>
            </>
          ))}
        {/* <section className="candidates-section section">
        <div className="section-wrapper">
          <h1 className="section-title">
            Kathmandu (House of Representatives)
          </h1>
          <div className="candidates-wrapper">
            {candidates && (
              <>
                <CandidateCard
                  data={candidates}
                  cFrom={"Constituency Number 1"}
                />
                <CandidateCard
                  data={candidates}
                  cFrom={"Constituency Number 2"}
                />
                <CandidateCard
                  data={candidates}
                  cFrom={"Constituency Number 3"}
                />
              </>
            )}
          </div>
          <Link
            to="/state/state-3/district/kathmandu"
            className="see-more-link"
          >
            <span>See More</span>
            <BsArrowRight />
          </Link>
        </div>
      </section>
      <section className="candidates-section section">
        <div className="section-wrapper">
          <h1 className="section-title">Jhapa (House of Representatives)</h1>
          <div className="candidates-wrapper">
            {candidates && (
              <>
                <CandidateCard
                  data={candidates}
                  cFrom={"Constituency Number 1"}
                />
                <CandidateCard
                  data={candidates}
                  cFrom={"Constituency Number 2"}
                />
                <CandidateCard
                  data={candidates}
                  cFrom={"Constituency Number 3"}
                />
              </>
            )}
          </div>
          <Link to="/state/state-1/district/jhapa" className="see-more-link">
            <span>See More</span>
            <BsArrowRight />
          </Link>
        </div>
      </section> */}
        {/* {partyData &&
        partyData.map((p, i) => (
          <div key={i}>
            <span>{p.party_name}</span>
            <img src={p.party_img} alt={p.party_name} />
            {p.party_desc}
          </div>
        ))} */}
        {/* {districtData &&
        districtData.map((d, i) => (
          <div>
            <span>{d.candidate_names}</span>
          </div>
        ))} */}
      </div>
    </React.Fragment>
  );
};

export default Home;
