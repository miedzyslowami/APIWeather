import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Geolocation from './Geolocation.jsx';
import scss from '../scss/index.scss';

class App extends React.Component {
  render() {
    return (<div className={scss.wrapper}>
      <Geolocation/>
    </div>)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App/>, document.getElementById('app'));
});
