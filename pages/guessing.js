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
      accessToken: 'MLY|4924225717699056|d997e3f37309c2f4c26231bbe09ea306',
      imageId: '498763468214164',
    },
  };
}
