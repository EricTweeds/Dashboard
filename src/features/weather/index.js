import React, { Component } from 'react';
import './styles.css';

export default class Weather extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { load } = this.props;
    load();
  }

  render() {
    return (

    );
  }
}
export const mapDispatchToProps = dispatch => ({
  load: bindActionCreators(loadWeather, dispatch)
});
