import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const getCountriesData = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const res = await data.json();
      setCountries(res);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      {countries.map((item) => {
        return (
          <div key={item.cca3} style={cardStyle}>
            <img
              src={item.flags.png}
              alt={`Flag of ${item.name.common}`}
              style={imageStyle}
            />
            <h2>{item.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
}
