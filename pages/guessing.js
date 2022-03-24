import React, { useState, useEffect } from 'react';
import MapWrapper from '../components/MapWrapper';
import ViewerComponent from '../components/ViewerComponent';
import getImageCoordinates from '../lib/mapillary';
import GeoJSON from 'ol/format/GeoJSON';
import Feature from 'ol/Feature';
import Map from '../components/map';

export default function Page({ accessToken, imageId, coordinates }) {
  /*// set intial state
  const [features, setFeatures] = useState([]);

  // initialization - retrieve GeoJSON features from Mock JSON API get features from mock
  //  GeoJson API (read from flat .json file in public directory)
  useEffect(() => {
    fetch('/mock-geojson-api.json')
      .then((response) => response.json())
      .then((fetchedFeatures) => {
        // parse fetched geojson into OpenLayers features
        //  use options to convert feature from EPSG:4326 to EPSG:3857
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        };
        const parsedFeatures = new GeoJSON().readFeatures(
          fetchedFeatures,
          wktOptions
        );

        // set features into state (which will be passed into OpenLayers
        //  map component as props)
        setFeatures(parsedFeatures);
      });
  }, []);*/

  return (
    <>
      {/*<ViewerComponent accessToken={accessToken} imageId={imageId} />*/}
      <Map />
    </>
  );
}

export async function getServerSideProps() {
  const imageIds = ['498763468214164'];

  let randomImage = imageIds[Math.floor(Math.random() * imageIds.length)];

  let coordinates = await getImageCoordinates(randomImage).then((res) =>
    res.json()
  );

  return {
    props: {
      accessToken: 'MLY|4924225717699056|d997e3f37309c2f4c26231bbe09ea306',
      imageId: randomImage,
      coordinates,
    },
  };
}
