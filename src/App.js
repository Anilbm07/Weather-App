import React, { useState } from "react";
// import newcom from "./newcom";
import Tempresult from "./Tempresult";
const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const newresult = result;
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        const feren = (celcius * 9) / 5 + 32;

        setResult("Temperature at " + city + "\n" + Math.round(feren) + "°F");
      });
    setCity("");
  };

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={submitHandler}>
              <input
                size="30"
                type="text"
                name="city"
                onChange={changeHandler}
                value={city}
              />{" "}
              <br />
              <br />
              <input type="submit" value="Get Temperature" />
            </form>
            <br /> <br />
            <div>
              {/* <h1>{result}</h1> */}
              <Tempresult result={result} />
            </div>
          </div>
        </div>
        {/* <newcom.js /> */}
      </center>
    </div>
  );
};

export default App;
