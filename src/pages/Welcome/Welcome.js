import React from "react";
import "./Welcome.css";
import setBg from "../../components/setbg";

function Welcome({ userData, setUserData, detailPage }) {
  const vechileUnderUser =
    userData && userData[0].vehicles && userData[0].vehicles.length;

  const logout = () => {
    sessionStorage.clear();
    setUserData(null);
  };
  return (
    <>
      <div id="log-btn" onClick={logout}>
        <a id="logout">Log out</a>
      </div>
      <div onLoad={setBg({ color: "#ffffff" })}>
        <div className="flex-container">
          <section id="welcome">
            <h1>Many Vehicles, Single Tracker</h1>
          </section>
        </div>
        <div>
          <h2 id="headline">Hello {userData && userData[0].name},</h2>
        </div>
        <div>
          {vechileUnderUser > 0 && (
            <div>
              {detailPage ? (
                <p> Go to previous page </p>
              ) : (
                <h3 id="topline">you have {vechileUnderUser} Vehicles:- </h3>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Welcome;
