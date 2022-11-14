import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Button, Container } from "./StyledComponents";

const SearchForm = () => {
  const [stateValue, setStateValue] = useState();
  const [districtValue, setDistrictValue] = useState();
  const [stateError, setStateError] = useState("");
  const [districtError, setDistrictError] = useState("");
  const [states, setStates] = useState();
  const [districts, setDistricts] = useState();

  const { stateId, districtId } = useParams();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const stateUrl = "https://election.lokpath.com/api/state";
  const districtUrl = "https://election.lokpath.com/api/district";

  const getState = async () => {
    await fetch(stateUrl)
      .then((res) => res.json())
      .then((data) => {
        setStates(data);
        console.log(data);
      });
  };

  const filteredDistricts =
    stateValue &&
    districts.filter((d) => d.province_id === parseInt(stateValue));

  const getDistrict = async () => {
    await fetch(districtUrl)
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data);
        console.log(data);
      });
  };

  useEffect(() => {
    getState();
    getDistrict();
  }, []);

  const formSubmit = () => {
    if ((stateValue !== "") & (districtValue !== "")) {
      navigate(`/state/${stateValue}/district/${districtValue}`);
    } else if ((stateValue === "") & (districtValue === "")) {
      setStateError("This value is empty");
      setDistrictError("This value is empty");
    } else if (stateValue === "") {
      setStateError("This value is empty");
    } else if (districtValue === "") {
      setDistrictError("This value is empty");
    }
  };

  setTimeout(() => {
    if ((stateValue !== "") & (districtValue !== "")) {
      setStateError("");
      setDistrictError("");
    }
  }, 4500);

  return (
    <section className="search-form-section">
      <form className="search-form container" onSubmit={submitHandler}>
        <div className="input-wrapper">
          <label htmlFor="selectState">प्रदेश</label>
          <select
            name="selectState"
            id="selectState"
            defaultValue={""}
            onChange={(e) => setStateValue(e.target.value)}
          >
            <option value=""></option>
            {states &&
              states.map((s, i) => (
                <option value={`${s.id}`} key={i}>
                  {s.province}
                </option>
              ))}
          </select>
          {stateError && <div className="error-message"> {stateError}</div>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="selectDistrict">जिल्ला</label>
          <select
            name="selectDistrict"
            id="selectDistrict"
            defaultValue={""}
            onChange={(e) => setDistrictValue(e.target.value)}
          >
            <option value=""></option>
            {filteredDistricts &&
              filteredDistricts.map((f, i) => (
                <option value={f.id} key={i}>
                  {f.district}
                </option>
              ))}
          </select>
          {districtError && (
            <div className="error-message"> {districtError}</div>
          )}
        </div>
        <input
          className="submit-btn"
          type="submit"
          value={"खोज्‍नुहोस्"}
          onClick={formSubmit}
        />
      </form>
    </section>
  );
};

export default SearchForm;
