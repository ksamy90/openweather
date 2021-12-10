import React, { useState } from "react";
import { connect } from "react-redux";
import { startFetchWeather } from "../actions/weather";

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }
  inputChange = (e) => {
    const city = e.target.value;
    this.setState(() => ({ city }));
  };
  refreshPage = () => {
    window.location.reload(false);
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.city === "") {
      return;
    } else {
      this.props.fetchWeather(this.state.city);
      this.setState(() => ({ city: "" }));
    }
  };

  render() {
    return (
      <div className="search-input">
        <button className="refreshbtn" onClick={this.refreshPage}>
          refresh
        </button>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="get weather forecast in your city"
            value={this.state.city}
            onChange={this.inputChange}
            className="input-field"
          />
          <button>search weather</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: (city) => dispatch(startFetchWeather(city)),
  };
};

export default connect(undefined, mapDispatchToProps)(SearchInput);
