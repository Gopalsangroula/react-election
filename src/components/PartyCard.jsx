import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import dataContext from "../context/dataContext";

const PartyCard = ({ data }) => {
  const { provinces, party } = useContext(dataContext);

  const color = [
    {
      id: 1,
      color: "#00C200",
    },
    {
      id: 4,
      color: "#FF4040",
    },
    {
      id: 5,
      color: "#E51A20",
    },
  ];

  const totalSeatsWon = data.reduce((prev, current) => {
    return prev + current.seatsWon;
  }, 0);

  return (
    <div className="party-card">
      <div className="party-card-wrapper">
        <div className="card-title">
          <div className="party-name">दल</div>
          <div className="seats-won">जीत</div>
        </div>
        {/* {data &&
          data
            // .sort((a, b) => (a.seatsWon < b.seatsWon ? 1 : -1))
            .map((d, i) => (
              <div className="single-row" key={i}>
                <div className="single-row-wrapper">
                  <div className="card-left">
                    <Link to={`/party/${d.name.toLowerCase()}`}>
                      <img src={d.img} alt={d.name} />
                      <span>{d.name}</span>
                    </Link>
                    <div>
                      <ProgressBar
                        percent={(d.seatsWon / totalSeatsWon) * 100}
                        color={color}
                        partyId={d.id}
                      />
                    </div>
                  </div>
                  <div className="card-right">
                    <span>{d.seatsWon}</span>
                  </div>
                </div>
              </div>
            ))} */}

        {party &&
          party
            // .sort((a, b) => (a.seatsWon < b.seatsWon ? 1 : -1))
            .slice(0, 5)
            .map((p, i) => (
              <div className="single-row" key={i}>
                <div className="single-row-wrapper">
                  <div className="card-left">
                    <Link to={`/party/${p.id}`}>
                      <img src={p.party_img} alt={p.party_name} />
                      <span>{p.party_name}</span>
                    </Link>
                    <div>
                      <ProgressBar
                        percent={0}
                        // percent={(p.seatsWon / totalSeatsWon) * 100}
                        color={color}
                        partyId={p.id}
                      />
                    </div>
                  </div>
                  <div className="card-right">
                    <span>{0}</span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PartyCard;
