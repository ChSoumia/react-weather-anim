import { useEffect, useState } from "react";
import Icons from "./Icons";
import "../App.css";

const Weather = () => {
  const [search, setSearch] = useState("Spain");
  const [values, setValues] = useState("");
  const [icon, setIcon] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${
    import.meta.env.VITE_APP_ID
  }`;

  const getData = async () => {
    await fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 400) {
          setValues(false);
        } else {
          console.log(data);
          console.log(data.weather[0].main);
          setValues(data);
          setIcon(data.weather[0].main);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, [search]);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      setSearch(e.target.value);
      e.target.value = "";
    }
  };
  return (
    <>
      <div className="container">
        <h1>React weather App</h1>
        <div className="row">
          <input autoFocus type="text" onKeyDown={handleSearch} />
        </div>
      </div>
      <div className="card">
        {values ? (
          <div className="card-container">
            <h1 className="city-name">{values.name}</h1>
            <p className="temp">{values.main.temp.toFixed(0)}&deg;</p>
            <img className="icon" src={Icons(icon)} alt="Weather Icon" />
            <div className="card-footer">
              <p className="temp-max-min">
                {values.main.temp_min.toFixed(0)}&deg; |{" "}
                {values.main.temp_max.toFixed(0)}&deg;
              </p>
            </div>
          </div>
        ) : (
          <h1>{"City not Found"}</h1>
        )}
      </div>
    </>
  );
};

export default Weather;
