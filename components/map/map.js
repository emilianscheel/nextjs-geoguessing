import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { VectorLayer } from './layers';
import 'ol/ol.css';
import './map.module.css';

export const MapContext = React.createContext(undefined);

export class MapComponent extends React.PureComponent {
  mapDivRef;
  state = {};
  refCoordinates;

  constructor(props) {
    super(props);
    this.mapDivRef = React.createRef();
    this.refCoordinates = this.props.refCoordinates;
  }

  componentDidMount() {
    if (!this.mapDivRef.current) {
      return;
    }

    const map = new Map({
      target: this.mapDivRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new View({
        projection: 'EPSG:4326',
        center: [0, 0],
        zoom: 3,
      }),
    });

    const mapContext = { map };
    this.setState({
      mapContext: mapContext,
    });
  }

  render() {
    return (
      <div className="map" ref={this.mapDivRef}>
        {this.state.mapContext && (
          <MapContext.Provider value={this.state.mapContext}>
            <VectorLayer refCoordinates={this.refCoordinates} />
          </MapContext.Provider>
        )}
      </div>
    );
  }
}
