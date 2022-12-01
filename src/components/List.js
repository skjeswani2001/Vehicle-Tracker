import React from "react";
import { useState, useEffect } from "react";
import Welcome from "../pages/Welcome/Welcome";
import Cards from "./Cards";
import Details from "../pages/Details/Details";

function List({ userDetail, setUserDetail }) {
  const { token } = userDetail;
  const [allData, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [details, setDetails] = useState(false);
  const [vehicleClicked, setVehicleClicked] = useState(null);

  useEffect(() => {
    getVehicleList();
  }, []);

  const getVehicleList = () => {
    fetch(" https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        setData([...data]);
        setUserData([data[0]]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Welcome
        userData={userData}
        details={details}
        setUserData={setUserDetail}
      />
      {!details ? (
        <Cards
          userData={userData}
          setDetails={setDetails}
          setVehicleClicked={setVehicleClicked}
        />
      ) : (
        <Details
          vehicleClicked={vehicleClicked}
          userData={userData}
          setDetails={setDetails}
        />
      )}
    </div>
  );
}

export default List;
