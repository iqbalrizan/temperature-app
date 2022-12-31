import { useState } from "react";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(20);
  const [color, setColor] = useState("neutral");
  const [background, setBackground] = useState("bgnetral");

  const increaseTemperature = () => {
    const nextTemperature = temperatureValue + 1;
    if (nextTemperature > 29) {
      setColor("hot29");
      setBackground("bghottest");
    } else if (nextTemperature >= 27 && nextTemperature < 29) {
      setColor("hot27");
    } else if (nextTemperature >= 25 && nextTemperature < 27) {
      setColor("hot25");
      setBackground("bghot");
    } else if (nextTemperature >= 23 && nextTemperature < 25) {
      setColor("hot23");
    } else if (nextTemperature >= 21 && nextTemperature < 23) {
      setColor("hot21");
    } else if (nextTemperature >= 19 && nextTemperature < 21) {
      setColor("cold19");
      setBackground("bgnetral");
    } else if (nextTemperature >= 17 && nextTemperature < 19) {
      setColor("cold17");
    } else if (nextTemperature >= 15 && nextTemperature < 17) {
      setColor("cold15");
      setBackground("bgcold");
    } else if (nextTemperature >= 13 && nextTemperature < 15) {
      setColor("cold13");
    } else if (nextTemperature >= 11 && nextTemperature < 13) {
      setColor("cold11");
      setBackground("bgcoldest");
    }
    setTemperatureValue(nextTemperature);
  };

  const decreaseTemperature = () => {
    const nextTemperature = temperatureValue - 1;
    if (nextTemperature > 29) {
      setColor("hot29");
      setBackground("bghottest");
    } else if (nextTemperature >= 27 && nextTemperature < 29) {
      setColor("hot27");
    } else if (nextTemperature >= 25 && nextTemperature < 27) {
      setColor("hot25");
      setBackground("bghot");
    } else if (nextTemperature >= 23 && nextTemperature < 25) {
      setColor("hot23");
    } else if (nextTemperature >= 21 && nextTemperature < 23) {
      setColor("hot21");
    } else if (nextTemperature >= 19 && nextTemperature < 21) {
      setColor("cold19");
      setBackground("bgnetral");
    } else if (nextTemperature >= 17 && nextTemperature < 19) {
      setColor("cold17");
    } else if (nextTemperature >= 15 && nextTemperature < 17) {
      setColor("cold15");
      setBackground("bgcold");
    } else if (nextTemperature >= 13 && nextTemperature < 15) {
      setColor("cold13");
    } else if (nextTemperature >= 11 && nextTemperature < 13) {
      setColor("cold11");
      setBackground("bgcoldest");
    }
    setTemperatureValue(nextTemperature);
  };

  return (
    <section className={background}>
      <div className="App">
        <h1>TEMPERATURE APP</h1>
        <div className="app-container">
          <div className="temperature-display-container">
            <div className={`temperature-display ${color}`}>{temperatureValue}&deg;C</div>
          </div>
          <h3>SHARP</h3>
          <div className="button-container">
            <button onClick={increaseTemperature}>+</button>
            <button onClick={decreaseTemperature}>-</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
