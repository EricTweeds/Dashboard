import React, { Component }  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Clock from '../../components/clock/index.js';
import { loadIndexStatus } from '../../actions';
import '../../App.css';
import './styles.css';

export class Status extends Component {
  componentWillMount() {
    const { load } = this.props;
    load();
  }
  render() {
    let statusClass = {
      height: "25px",
      width: "25px",
      backgroundColor: this.props.active ? "green" : "red",
      borderRadius: "50%",
      borderColor: "#FFF",
      borderWidth: "1px",
      borderStyle: "solid",
      display: "inline-block",
      margin: "1rem"
    }
    return (
      <div className="root">
          <div className="title">Status</div>
          <div className="clockContainer">
            <Clock />
            <div className="status">
              <h2>Server Online: </h2>
              <span style={statusClass}></span>
            </div>
          </div>
      </div>
    )
  }
}
export const mapDispatchToProps = dispatch => ({
  load: bindActionCreators(loadIndexStatus, dispatch) 
});

export const mapStateToProps = state => ({
  active: state.indexStatus.active
})

export default connect(mapStateToProps, mapDispatchToProps)(Status)