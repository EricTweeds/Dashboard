import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadLightsRequest, changeLightsRequest } from '../../actions';
import '../../App.css';
import './styles.css';

export class Lights extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const { load } = this.props;
    load();
  }

  handleClick(type) {
    const { changeLights } = this.props;
    changeLights(type);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="root">
        <div className="title">Light Controls</div>
        <div className="lightContainers">
          {data && Object.values(data).map(option => (
            <div className="container clickable" onClick={() => this.handleClick(option.type)} key={option.type}>
              <div className="typeLabel">{option.displayName}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  load: bindActionCreators(loadLightsRequest, dispatch),
  changeLights: bindActionCreators(changeLightsRequest, dispatch)
});

export const mapStateToProps = state => ({
  data: state.lights.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Lights);