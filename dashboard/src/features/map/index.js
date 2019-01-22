import React, { Component } from 'react';
import classnames from 'classnames';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker
  } from "react-simple-maps";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadLocationsRequest } from '../../actions';
import mapObject from './geography.json';
import './styles.css';

export class WorldMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCoords: [ -79.4760, 43.1571 ]
        }
    }

    componentWillMount() {
        const { load } = this.props;
        load();
    }

    handleClick(coords) {
        this.setState({selectedCoords: coords})
    }
    render() {
        return(
            <div className="mapContainer">
                <div>
                    <h1>Destinations Visited</h1>
                    <div className="country">
                        {this.props.data ? Object.keys(this.props.data).map(country => {
                            return (
                                <div>
                                    <h3>{country}</h3>
                                    <ul className="list">
                                        {this.props.data ? this.props.data[country].map(city => {
                                            return (<li onClick={this.handleClick.bind(this, city.coords)} className={classnames("city", this.state.selectedCoords[0] == city.coords[0] && this.state.selectedCoords[1] == city.coords[1] ? "current" : "")}>{city.city}</li>)
                                        }): null}
                                    </ul>
                                </div>
                            )
                        }) : null}
                    </div>
                </div>
                <div>
                    <ComposableMap>
                    <ZoomableGroup>
                    <Geographies geography={ mapObject }>
                        {(geographies, projection) => geographies.map(geography => (
                        <Geography
                            key={ geography.id }
                            geography={ geography }
                            projection={ projection }
                            style={{
                                default: {
                                fill: "#eceff1",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                                },
                                hover: {
                                fill: "#eceff1",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                                },
                                pressed: {
                                fill: "#eceff1",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                                },
                            }}
                            />
                        ))}
                    </Geographies>
                    <Markers>
                    <Marker marker={{ coordinates: this.state.selectedCoords }}>
                        <circle cx={ 0 } cy={ 0 } r={ 3 } fill={"red"} />
                    </Marker>
                    </Markers>
                    </ZoomableGroup>
                    </ComposableMap>
                </div>
            </div>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    load: bindActionCreators(loadLocationsRequest, dispatch)
});

export const mapStateToProps = state => ({
    data: state.locations.data
});
  
export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);
  