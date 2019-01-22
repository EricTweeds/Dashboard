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

let data = {
    "Canada": [
        {
            city: "Vancouver",
            coords: [ -123.116226, 49.246292 ]
        },
        {
            city: "Beamsville",
            coords: [ -79.4760, 43.1571 ]
        },
        {
            city: "Montreal",
            coords: [ -73.5673, 45.5017 ]
        },
        {
            city: "Quebec City",
            coords: [ -71.2080, 46.8139 ]
        },
        {
            city: "Halifax",
            coords: [ -63.5752, 44.6488 ]
        }
    ],
    "United States": [
        {
            city: "Detroit",
            coords: [ -83.045753, 42.331429 ]
        },
        {
            city: "Cleveland",
            coords: [ -81.681290, 41.505493 ]
        },
        {
            city: "Pittsburgh",
            coords: [ -79.995888, 40.440624 ]
        },
        {
            city: "Orlando",
            coords: [ -81.379234, 28.538336]
        },
        {
            city: "Miami",
            coords: [ -80.191788, 25.761681 ]
        },
        {
            city: "San Juan, Puerto Rico",
            coords: [ -66.105721, 18.466333 ]
        },
    ]
}

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
                    <div>
                        {this.props.data ? Object.keys(this.props.data).map(country => {
                            return (
                                <div>
                                    <h3>{country}</h3>
                                    <ul>
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
  