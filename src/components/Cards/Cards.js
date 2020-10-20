import React from "react";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
  if (!confirmed || !recovered || !deaths) {
    return "Loading";
  }

  return (
    <div className="md:flex md:justify-center text-white">
      <div className="m-2 bg-purple-600 hover:bg-purple-700  rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 font-bold">Infected</div>
          <p className="text-xl">
            <CountUp start={0} end={confirmed.value} separator="," />
          </p>
          <p className="text-lg">{new Date(lastUpdate).toDateString()}</p>
          <p className="text-lg">Number of active cases of COVID-19</p>
        </div>
      </div>

      <div className="m-2 bg-green-600 hover:bg-green-700  rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 font-bold">Recovered</div>
          <p className="text-xl">
            <CountUp start={0} end={recovered.value} separator="," />
          </p>
          <p className="text-lg">{new Date(lastUpdate).toDateString()}</p>
          <p className="text-lg">Number of recovered cases from COVID-19</p>
        </div>
      </div>

      <div className="m-2 bg-red-600 hover:bg-red-700 rounded  overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 font-bold">Deaths</div>
          <p className="text-xl">
            <CountUp start={0} end={deaths.value} duration={3} separator="," />
          </p>
          <p className="text-lg">{new Date(lastUpdate).toDateString()}</p>
          <p className="text-lg">Number of death cases by COVID-19</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
