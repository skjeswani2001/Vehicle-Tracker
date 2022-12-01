import React from "react";
import "./Cards.css";

function Cards({ userData, setDetails, setVehicleClicked }) {
  console.log(userData, "userData");
  const setVehicleFunc = (vehicle) => {
    setVehicleClicked(vehicle);
    setDetails(true);
  };
  if (!userData) {
    return <h1>Just a moment...</h1>;
  }
  return (
    <div className="wrapper">
      <ul className="cards">
        {userData &&
          userData[0].vehicles &&
          userData[0].vehicles.map((vehicle, index) => {
            return (
              <li
                className="grid_cards"
                key={index}
                onClick={() => setVehicleFunc(vehicle)}
              >
                <div className="card">
                  <div className="card_content">
                    <h2 className="card_title">ID : {vehicle.id}</h2>
                    <p>Registration No : {vehicle.registrationNumber}</p>
                    <p>Type : {vehicle.type}</p>
                    {vehicle.status === "Online" ? (
                      <p className="card_btn">Status : {vehicle.status}</p>
                    ) : (
                      <p>Status : {vehicle.status}</p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Cards;

{
  /* <div>
          {userData &&
            userData[0].vehicles &&
            userData[0].vehicles.map((vehicle, index) => {
              return (
                <div key={index} onClick={() => setVehicleFunc(vehicle)}>
                  <div>
                    <h2>ID : {vehicle.id}</h2>
                    <p>Registration No : {vehicle.registrationNumber}</p>
                    <p>Type : {vehicle.type}</p>
                    {vehicle.status === "Online" ? (
                      <p>Status : {vehicle.status}</p>
                    ) : (
                      <p>Status : {vehicle.status}</p>
                    )}
                  </div>
                </div>
              );
            })}
        </div> */
}
