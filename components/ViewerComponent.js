import { Viewer } from 'mapillary-js';
import React from 'react';
import { useEffect } from 'react';

export default function ViewerComponent({ accessToken, imageId }) {
  let containerRef = React.createRef();

  let viewer;

  useEffect(() => {
    containerRef.current.children.length < 2
      ? (viewer = new Viewer({
          accessToken: accessToken,
          container: containerRef.current,
          imageId: imageId,
        }))
      : null;
  });

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
