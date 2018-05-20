import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

export default class DeviceModal extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    const { data } = this.props;
    return (
      <div>
        <button onClick={this.openModal} className="button">View More Devices</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Device Modal"
        >
          <div className="onlineContainer">
          <div className="deviceRow">
            <div className="device tableHeader">Name</div>
            <div className="device tableHeader">IP</div>
            <div className="device tableHeader">MAC</div>
            <div className="device tableHeader">Connection Type</div>
          </div>
          {data.map(device => (
            <div className="deviceRow" key={device.MAC}>
              <div className="device">{device.Name}</div>
              <div className="device">{device.IP}</div>
              <div className="device">{device.MAC}</div>
              <div className="device">{device.ConnectionType}</div>
            </div>
          ))}
          </div>
          <div className="more">
            <button onClick={this.closeModal} className="button">close</button>
          </div>
        </Modal>
      </div>
    );
  }
}
 