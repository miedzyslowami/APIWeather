import React from 'react';
import {geolocated} from 'react-geolocated';
import WeatherWidget from './WeatherWidget.jsx';
import scss from '../scss/loader.scss';

class Geolocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <WeatherWidget geolocation={this.props.isGeolocationEnabled}/>
      : !this.props.isGeolocationEnabled
        ? <WeatherWidget geolocation={this.props.isGeolocationEnabled}/>
        : this.props.coords
          ? <WeatherWidget
                  latitude={this.props.coords.latitude} longitude={this.props.coords.longitude} geolocation={this.props.coords}/>
          : <div className={scss.loader}>
              <div className={scss.loader__icon}/>
              <div>Getting the location data&hellip;</div>
          </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 7000
})(Geolocation);
