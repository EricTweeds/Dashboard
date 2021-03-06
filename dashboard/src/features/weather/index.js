import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadWeatherRequest } from '../../actions';
import '../../App.css';
import './styles.css';

export class Weather extends Component {
  componentWillMount() {
    const { load } = this.props;
    load('Toronto');
  }

  render() {
    const { data } = this.props;
    return (
      <div className="root">
        <div className="title">Weather</div>
        <div className="weatherCategories">
          {Object.values(data).map(type => (
            <div className="container" key={type.name}>
              <div className="containerTitle">{type.name}</div>
              <div className="tempContainer">
                <div className="temperature">Temp: {type.temp}&deg;C</div>
              </div>
              <div className="tempContainer">
                <div className="temperature">POP: {type.pop}%</div>
              </div>
              <div className="tempContainer">
                <div className="weatherDesciption">{type.state}</div>
              </div>
            </div>
          ))}
        </div>
     </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  load: bindActionCreators(loadWeatherRequest, dispatch) 
});

export const mapStateToProps = state => ({
  data: state.weather.data
})

export default connect(mapStateToProps, mapDispatchToProps)(Weather)