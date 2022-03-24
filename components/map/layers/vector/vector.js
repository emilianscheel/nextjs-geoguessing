import React from 'react';
import { MapBrowserEvent } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Circle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { MapContext } from '../../map';

class VectorLayerComponent extends React.PureComponent {
  layer;
  source;
  refCoordinates;

  constructor(props) {
    super(props);
    this.refCoordinates = this.props.refCoordinates;
  }

  componentDidMount() {
    this.source = new VectorSource({
      features: undefined,
    });

    this.layer = new VectorLayer({
      source: this.source,
    });

    this.props.map.addLayer(this.layer);
    this.props.map.on('singleclick', this.onMapClick);
  }
  /*
  componentWillUnmount() {
    this.props.map.removeLayer(this.layer);
  }

  componentDidUpdate(prevProps: TVectorLayerComponentProps) {
    if (prevProps.features != this.props.features) {
      this.source.clear();
      if (this.props.features) {
        this.source.addFeatures(this.props.features);
      }
    }
  }
  */

  onMapClick = (event) => {
    const featureToAdd = new Feature({
      geometry: new Point(event.coordinate),
    });
    this.refCoordinates(event.coordinate);
    const style = new Style({
      image: new Circle({
        radius: 6,
        fill: new Fill({ color: 'red' }),
        stroke: new Stroke({
          color: [0, 0, 0],
          width: 2,
        }),
      }),
    });
    featureToAdd.setStyle(style);
    this.source.clear();
    this.source.addFeatures([featureToAdd]);
  };

  render() {
    return null;
  }
}

export const VectorLayerWithContext = (props) => {
  return (
    <MapContext.Consumer>
      {(mapContext) => {
        if (mapContext) {
          console.log(mapContext);
          return <VectorLayerComponent {...props} map={mapContext.map} />;
        }
      }}
    </MapContext.Consumer>
  );
};