import React from 'react';
import scss from '../scss/degreeBox.scss';
class DegreeBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div className={scss.degree__box}>
      <h3 className={scss.degree__box__header}>{this.props.city}, {this.props.country}</h3>
      <div className={scss.weather}>
        <div className={scss.degree__value}>
          <p>{this.props.temperature}
            &deg;C</p>
        </div>
        <img src={`//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.icon}.png`} aria-label="hidden"/></div>

    </div>)
  }
}
export default DegreeBox;
