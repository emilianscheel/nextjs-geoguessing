import { Viewer } from 'mapillary-js';
import React from 'react';
import { useEffect } from 'react';

export default function ViewerComponent({ accessToken, imageId }) {
  let containerRef = React.createRef();

  useEffect(() => {
    let viewer = new Viewer({
      accessToken: accessToken,
      container: containerRef.current,
      imageId: imageId,
    });
  });

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
