import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import StartFirebase from "../firebase/firebase-config";
import "./Map.css";

function Map({ vehicleClicked }) {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [localLat, setlocalLat] = useState(null);
  const [locallong, setlocalLong] = useState(null);
  const db = StartFirebase();

  useEffect(() => {
    getLocation();
  }, [lat, long]);

  const getLocation = () => {
    const id = vehicleClicked.id;
    const reg = vehicleClicked.registrationNumber;
    console.log(`${id}-${reg}/location`, "id");
    const dbRef = ref(db, `${id}-${reg}/location`);

    const localRef = ref(db, "99-WB 73 E 4299/location");
    const allRef = ref(db);

    onValue(localRef, (snapshot) => {
      const vehicleData = snapshot.val();
      if (vehicleData) {
        const { latitude, longitude } = vehicleData;
        setlocalLong(longitude);
        setlocalLat(latitude);
      }
    });

    onValue(allRef, (snapshot) => {
      const vehicleData = snapshot.val();
      if (vehicleData) {
        const { latitude, longitude } = vehicleData;
        setLong(longitude);
        setLat(latitude);
      }
    });
  };

  let latFinal = lat ? lat : localLat;
  let longFinal = long ? long : locallong;
  const reg = vehicleClicked.registrationNumber;

  return (
    <div className="map">
      {localLat && locallong && (
        <h1 className="my-3 ">
          This location is fetched from vehicle WB 73 E 4299 as {reg} has no
          data in it{" "}
        </h1>
      )}
      <iframe
        id="iframeId"
        src={`https://maps.google.com/maps?q=${latFinal},${longFinal}&hl=es;&output=embed`}
        height="500px"
        width="100%"
      ></iframe>
    </div>
  );
}

export default Map;
