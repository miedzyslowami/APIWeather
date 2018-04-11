import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '../../node_modules/@fortawesome/fontawesome-free-solid/faSearch';
import scss from '../scss/cityInput.scss';
class CityInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ''
    }
  }
  handleCityChange = (e) => {
    this.setState({city: e.target.value});
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.props.callApi(this.state.city);
    this.setState({city: ''});
  }
  render() {
    return (<form onSubmit={this.submitHandler}>
      <h2>Check the weather!!</h2>
      <input className={scss.city__input} onChange={this.handleCityChange} type="text" name="city" placeholder="type a city..." value={this.state.city}/>
      <button className={scss.submit__button}>
        <FontAwesomeIcon icon={faSearch}/></button>
    </form>)
  }
}
export default CityInput;
