import React, { Component } from 'react';
import SmallButon from '../../components/SmallButton';
import RoundButton from '../../components/RoundButton';
import PowerButton from '../../components/PowerButton';
import './styles.css';

export default class Remote extends Component {
  render() {
    return (
      <div className="root">
        <div className="remote">
          <div className="remoteRow">
            <div className="remoteCol">
              <PowerButton />
            </div>
            <div className="remoteCol">
              <h1>TV</h1>
            </div>
            <div className="remoteCol">
              <SmallButon>input</SmallButon>
            </div>
          </div>
          <div className="remoteRow">
            <div className="remoteCol">
              <RoundButton>1</RoundButton>
            </div>
            <div className="remoteCol">
              <RoundButton>2</RoundButton>
            </div>
            <div className="remoteCol">
              <RoundButton>3</RoundButton>
            </div>
          </div>
          <div className="remoteRow">
            <div className="remoteCol">
              <RoundButton>4</RoundButton>
            </div>
            <div className="remoteCol">
              <RoundButton>5</RoundButton>
            </div>
            <div className="remoteCol">
              <RoundButton>6</RoundButton>
            </div>
          </div>
          <div className="remoteRow">
            <div className="remoteCol">
              <RoundButton>7</RoundButton>
            </div>
            <div className="remoteCol">
              <RoundButton>8</RoundButton>
            </div>
            <div className="remoteCol">
              <RoundButton>9</RoundButton>
            </div>
          </div>
          <div className="remoteRow">
            <div className="remoteCol">
              <SmallButon>info</SmallButon>
            </div>
            <div className="remoteCol">
              <RoundButton>0</RoundButton>
            </div>
            <div className="remoteCol">
              <SmallButon>mute</SmallButon>
            </div>
          </div>
        </div>
      </div>
    )
  }
}