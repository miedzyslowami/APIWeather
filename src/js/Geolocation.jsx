import React from 'react';
import {geolocated} from 'react-geolocated';
import WeatherWidget from './WeatherWidget.jsx';

class Geolocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <div><h3>Your browser does not support Geolocation</h3><WeatherWidget geolocation={this.props.isGeolocationEnabled}/></div>
      : !this.props.isGeolocationEnabled
        ? <div><h3>Geolocation is not enabled</h3><WeatherWidget geolocation={this.props.isGeolocationEnabled}/></div>
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
