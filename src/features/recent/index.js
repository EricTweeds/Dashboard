import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import Time from 'react-time-format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadRecentRequest } from '../../actions';
import '../../App.css';
import './styles.css';

export class Recent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="root">
        <div className="title">Recent</div>
        <div className="containers">
        {data.map(activity => (
          <div className="container">
            <div className="name">{activity.name}</div>
            <div className="item">
              <MaterialIcon icon={activity.icon} size='large' invert />
            </div>
            <div className="item">
              <Time value={activity.lastAccessed * 1000} format="YY-MM-DD"/>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  load: bindActionCreators(loadRecentRequest, dispatch)
});

export const mapStateToProps = state => ({
  data: state.recent.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Recent);