import React from 'react';
import CityInput from './CityInput.jsx';
import DegreeBox from './DegreeBox.jsx';
import {API_KEY, API_ADDRESS} from './credentials.js';
import scss from '../scss/weatherWidget.scss';

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      API_ADDRESS,
      API_KEY,
      location: '',
      country: '',
      temperature: '',
      icon: '',
      errorMessage: '',
      geolocation: '',
      latitude: '',
      longitude: ''
    }
  }
  componentWillMount() {
    this.setState({geolocation: this.props.geolocation, latitude: this.props.latitude, longitude: this.props.longitude});
  }
  componentDidMount() {
    console.log(this.props.geolocation);
    this.state.geolocation
      ? this.callApi('', this.props.geolocation, this.props.latitude, this.props.longitude)
      : this.setState({errorMessage: 'Position not detected'});
  }
  shouldComponentUpdate() {
    return true;
  }
  callApi = async (location = '', geolocation = false, latitude = '', longitude = '') => {
    let url = this.state.API_ADDRESS;
    !geolocation
      ? url = `${url}?q=${location}&appid=${this.state.API_KEY}&units=metric`
      : url = `${url}?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${this.state.API_KEY}&units=metric`;
    const apiCall = await fetch(`${url}`);
    const data = await apiCall.json();
    if (data.cod !== "404") {
      this.getWeather(data.name, data.sys.country, data.main.temp, data.weather[0].icon);
    } else {
      this.setState({location: '', country: '', temperature: '', icon: '', errorMessage: 'City not found'});
    }
  }

  getWeather = (location, country, temperature, icon) => {
    this.setState({location, country, temperature, icon, errorMessage: ''});
  }

  render() {
    return (<div className={scss.weather__widget}>
      <CityInput callApi={this.callApi}/> {
        this.state.location != ''
          ? <DegreeBox icon={this.state.icon} city={this.state.location} country={this.state.country} temperature={this.state.temperature}/>
          : <div className={scss.error__message}>{this.state.errorMessage}</div>
      }
    </div>)
  }
}

export default WeatherWidget;
