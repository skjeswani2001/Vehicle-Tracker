import React from "react";
import Map from "../../components/Map";
import "./Details.css";

function Details({ vehicleClicked, setDetails }) {
  return (
    <div>
      <section>
        <div>
          <div className="details">
            <h2 id="detail-1">Vehicle Details:</h2>
            <h2 id="detail-2">{vehicleClicked.status}</h2>
            <h1 id="detail-3">{vehicleClicked.registrationNumber}</h1>
            <h1 id="detail-4">{vehicleClicked.type}</h1>
          </div>
          <div
            onClick={() => {
              setDetails(false);
            }}
          ></div>
        </div>
        <div>
          <Map vehicleClicked={vehicleClicked} />
        </div>
        <div>
          <button
            onClick={() => {
              setDetails(false);
            }}
          >
            <span>
              <span>Go Back</span>
              <span>to Home</span>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Details;
