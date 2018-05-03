import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import MaterialIcon from 'material-icons-react';
import { connect } from 'react-redux';
import { loadWhosOnlineRequest } from '../../actions';
import '../../App.css';
import './styles.css';

export class WhosOnline extends Component {
  componentWillMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { data } = this.props;

    data.sort(a => {
      return !a.online
    });

    return (
      <div className="root">
        <div className="title">Who's Online</div>
        <div className="onlineContainer">
          <div className="deviceRow">
            <div className="device tableHeader">Type</div>
            <div className="device tableHeader">Name</div>
            <div className="device tableHeader">IP</div>
            <div className="device tableHeader">Status</div>
          </div>
          {data.map(device => (
            <div className="deviceRow" key={device.name}>
              <div className="device">
                <MaterialIcon icon={device.icon} size='medium' />
              </div>
              <div className="device">{device.name}</div>
              <div className="device">{device.ip}</div>
              {device.online ? 
                <div className="device userOnline">Online</div> :
                <div className="device userOffline">Offline</div>
              }
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  data: state.whosOnline.data
});

export const mapDispatchToProps = dispatch => ({
  load: bindActionCreators(loadWhosOnlineRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WhosOnline);
