import React from 'react';
import ViewerComponent from '../components/ViewerComponent';

export default function Page({ accessToken, imageId, coordinates }) {
  return (
    <>
      <ViewerComponent
        accessToken={accessToken}
        imageId={imageId}
        style={{ width: '100%', height: '100%s' }}
      />
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      accessToken: process.env.MAPILLARY_CLIENT_ACCESS_TOKEN,
    },
  };
}
