import React, { useState, useEffect, createContext } from "react";

const dataContext = createContext("");
export default dataContext;

export const DataProvider = (props) => {
  const baseUrl = "https://election.lokpath.com/api";
  //   const partyUrl = "https://election.lokpath.com/api/party";
  //   const districtUrl = "https://election.lokpath.com/api/district";
  //   const constituencyUrl = "https://election.lokpath.com/api/constituency";
  //   const candidatesUrl = "https://election.lokpath.com/api/candidate";
  //   const assemblyUrl = "https://election.lokpath.com/api/assembly";
  //   const assemblyCandidatesUrl =
  //     "https://election.lokpath.com/api/assembly-candidates";

  const [loading, setLoading] = useState(false);

  const [party, setParty] = useState();
  const [candidates, setCandidates] = useState();
  const [provinces, setProvinces] = useState();
  const [districts, setDistricts] = useState();
  const [constituencies, setConstituencies] = useState();
  const [assembly, setAssembly] = useState();
  const [assemblyCandidates, setAssemblyCandidates] = useState();

  const partyFetch = async () => {
    try {
      setLoading(true);
      await fetch(baseUrl + "/party")
        .then((res) => res.json())
        .then((data) => {
          setParty(data);
          console.log(data);
        });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  const candidateFetch = async () => {
    try {
      setLoading(true);
      await fetch(baseUrl + "/candidate")
        .then((res) => res.json())
        .then((data) => {
          setCandidates(data);
          console.log(data);
        });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  const districtsFetch = async () => {
    try {
      setLoading(true);
      await fetch(baseUrl + "/district")
        .then((res) => res.json())
        .then((data) => {
          setDistricts(data);
          console.log(data);
        });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  const constituenciesFetch = async () => {
    try {
      setLoading(true);
      await fetch(baseUrl + "/constituency")
        .then((res) => res.json())
        .then((data) => {
          setConstituencies(data);
          console.log(data);
        });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  const assemblyFetch = async () => {
    try {
      setLoading(true);
      await fetch(baseUrl + "/assembly")
        .then((res) => res.json())
        .then((data) => {
          setAssembly(data);
          console.log(data);
        });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  const assemblyCandidatesFetch = async () => {
    try {
      setLoading(true);
      await fetch(baseUrl + "/assembly-candidates")
        .then((res) => res.json())
        .then((data) => {
          setAssemblyCandidates(data);
          console.log(data);
        });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  const provincesFetch = async () => {
    try {
      setLoading(true);
      await fetch(baseUrl + "/state")
        .then((res) => res.json())
        .then((data) => {
          setProvinces(data);
          console.log(data);
        });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    partyFetch();
    candidateFetch();
    districtsFetch();
    constituenciesFetch();
    assemblyFetch();
    assemblyCandidatesFetch();
    provincesFetch();
  }, []);

  const value = {
    party,
    candidates,
    districts,
    constituencies,
    assembly,
    assemblyCandidates,
    provinces,
    loading,
  };

  return (
    <dataContext.Provider value={value}>{props.children}</dataContext.Provider>
  );
};
