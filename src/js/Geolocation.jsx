import React from 'react';
import {geolocated} from 'react-geolocated';
import WeatherWidget from './WeatherWidget.jsx';

class Geolocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <WeatherWidget geolocation={this.props.isGeolocationEnabled}/>
      : !this.props.isGeolocationEnabled
        ? <WeatherWidget geolocation={this.props.isGeolocationEnabled}/>
        : this.props.coords
          ? <WeatherWidget latitude={this.props.coords.latitude} longitude={this.props.coords.longitude} geolocation={this.props.coords}/>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Geolocation);
