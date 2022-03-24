import React, { useState, useEffect } from 'react';
import MapWrapper from '../components/MapWrapper';
import ViewerComponent from '../components/ViewerComponent';
import getImageCoordinates from '../lib/mapillary';
import GeoJSON from 'ol/format/GeoJSON';
import Feature from 'ol/Feature';
import { Map } from '../components/map';

export default function Page({ accessToken, imageId, coordinates }) {
  const [selectedCoordinates, setSelectedCoordinates] = useState([]);

  console.log('guessing.js', selectedCoordinates);

  return (
    <>
      {/*<ViewerComponent accessToken={accessToken} imageId={imageId} />*/}
      <Map
        refCoordinates={(coordinates) => setSelectedCoordinates(coordinates)}
      />
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
