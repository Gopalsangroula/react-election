import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useContext } from "react";
import dataContext from "../context/dataContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const color = [
  {
    id: 1,
    name: "Independent",
    color: "red",
  },
  {
    id: 2,
    name: "Congress",
    color: "blue",
  },
  {
    id: 3,
    name: "CPN UML",
    color: "green",
  },
  {
    id: 4,
    name: "Maoist",
    color: "yellow",
  },
  {
    id: 5,
    name: "Misc",
    color: "purple",
  },
];

const StateResults = ({ info }) => {
  const { party } = useContext(dataContext);

  const data = {
    labels: party
      // .sort((a, b) => (a.seatsWon < b.seatsWon ? 1 : -1))
      .slice(0, 5)
      .map((i) => i.party_name),
    datasets: [
      {
        label: "Number of Votes",
        data: info
          // .sort((a, b) => (a.seatsWon < b.seatsWon ? 1 : -1))
          .map((i) => i.seatsWon),
        backgroundColor: [
          "#FFC7BC",
          "#A4D1FF",
          "#FFF77F",
          "#9EFF7F",
          "#D2ADFF ",
          "#FFE27F",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        // borderWidth: 0,
      },
    ],
  };

  // const hello = color.find(({ name }) => name === info.map((d) => d.name));
  console.log(info.map((d) => color.find(({ name }) => name === d.name)));

  return (
    <div className="state-result-card">
      <div className="chart-wrapper">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default StateResults;
