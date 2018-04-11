import React from 'react';
import WeatherWidget from './WeatherWidget.jsx';
import {geolocated} from 'react-geolocated';
import scss from '../scss/loader.scss';

class Geolocation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.isGeolocationEnabled
      ? this.props.coords
        ? <WeatherWidget geolocation={true} latitude={this.props.coords.latitude} longitude={this.props.coords.longitude}/>
        : <div className={scss.loader}>
            <div className={scss.loader__icon}/>
            Getting the location data&hellip;
          </div>
      : <WeatherWidget geolocation={false} latitude='' longitude=''/>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
    timeout: Infinity
  },
  userDecisionTimeout: 5000
})(Geolocation);
