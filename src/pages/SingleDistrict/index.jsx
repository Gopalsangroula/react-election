import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";
import ConstituencyTab from "../../components/ConstituencyTab";
import SearchForm from "../../components/SearchForm";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { BsX, BsZoomIn, BsZoomOut } from "react-icons/bs";
import dataContext from "../../context/dataContext";

const SingleDistrict = () => {
  const { loading, districts, constituencies, provinces } =
    useContext(dataContext);

  const { stateId, districtId } = useParams();

  const filterDistrict =
    districts && districts.find((d) => d.id === parseInt(districtId));

  const filterConstituency =
    constituencies &&
    constituencies.filter((c) => c.district_id === parseInt(districtId));

  const filteredProvince = provinces?.find((p) => p.id === parseInt(stateId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <section className="loading-section">
          <h1>Loading...</h1>
        </section>
      ) : (
        <div className="single-district">
          <SearchForm />
          <div className="container">
            <div className="svg-container">
              <div className="top">
                <div className="district-map-wrapper">
                  <ReactSVG
                    src={`/district/state-${parseInt(
                      stateId
                    )}/${districtId}.svg`}
                    className={"district-map"}
                  />
                  <div className="district-details">
                    <div className="column">
                      <div className="left">District Name</div>
                      <div className="right">{filterDistrict?.district}</div>
                    </div>
                    <div className="column">
                      <div className="left">No of Constituency</div>
                      <div className="right">{filterConstituency?.length}</div>
                    </div>
                    <div className="column">
                      <div className="left">Province</div>
                      <div className="right">{filteredProvince?.id}</div>
                    </div>
                  </div>
                </div>
                <div className="constituency-map-wrapper">
                  <TransformWrapper>
                    {({ zoomIn, zoomOut, resetTransform }) => (
                      <>
                        <div className="tools">
                          <button
                            className="zoom-in-btn"
                            onClick={() => zoomIn()}
                            title="Zoom In"
                          >
                            <BsZoomIn />
                          </button>
                          <button
                            className="zoom-out-btn"
                            onClick={() => zoomOut()}
                            title="Zoom Out"
                          >
                            <BsZoomOut />
                          </button>
                          <button
                            className="default-zoom-btn"
                            onClick={() => resetTransform()}
                            title="Reset"
                          >
                            <BsX />
                          </button>
                        </div>
                        <TransformComponent>
                          <div className="constituency-map">
                            <ReactSVG
                              src={`/districtsSvg/state-${parseInt(
                                stateId
                              )}/${districtId}.svg`}
                            />
                          </div>
                        </TransformComponent>
                      </>
                    )}
                  </TransformWrapper>
                </div>
              </div>
            </div>

            {filterConstituency &&
              filterConstituency.map((f, i) => (
                <section className="district-candidate-section" key={i}>
                  <h1 className="section-title">{f.representative_name}</h1>
                  <ConstituencyTab constituency={f} />
                </section>
              ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SingleDistrict;
