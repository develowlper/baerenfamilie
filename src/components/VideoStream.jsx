import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { x } from '@xstyled/styled-components';

async function getVideoStream(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    return stream;
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}

const setVideoSrcObject = async (video) => {
  video.srcObject = await getVideoStream({
    audio: false,
    video: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  });
  video.play();
};

const VideoStream = ({}) => {
  const videoRef = React.useRef();

  useEffect(() => {
    setVideoSrcObject(videoRef.current);
  }, []);

  return (
    <x.video
      position="absolute"
      top={0}
      h="100vh"
      w="100vw"
      ref={videoRef}
    ></x.video>
  );
};

VideoStream.displayName = 'VideoStream';

VideoStream.propTypes = {};

VideoStream.defaultProps = {};

export default VideoStream;
