import React from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

export const WeatherList = (props) => {
  console.log(props);
  const temperatures = props.weather.map((weather) => {
    return weather.list.map((data) => {
      return data.main.temp;
    });
  });
  return (
    <div className="weather-list">
      <h1>Temperature</h1>
      {props.weather.map((cityData) => {
        return (
          <div key={cityData.city.id}>
            <h2>{cityData.city.name}</h2>
            <div>
              <span className="tempdata">{temperatures[0][0]} kelvin</span>
              <span className="tempdata">{temperatures[0][1]} kelvin</span>
              <span className="tempdata">{temperatures[0][2]} kelvin</span>
            </div>
          </div>
        );
      })}
      {temperatures && (
        <Sparklines
          data={temperatures[0]}
          limit={5}
          height={120}
          width={180}
          margin={5}
        >
          <SparklinesLine color="blue" />
        </Sparklines>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(WeatherList);
