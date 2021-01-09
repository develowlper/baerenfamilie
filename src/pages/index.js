import React from 'react';
import { x } from '@xstyled/styled-components';
import Webcam from 'react-webcam';
import useMeasure from 'react-use-measure';
import XStyled from '../components/XStyled';
import Layout from '../components/Layout';

const IndexPage = () => {
  const containerRef = React.useRef();
  const webcamRef = React.useRef();

  return (
    <XStyled>
      <Layout>
        <Webcam
          audio={false}
          ref={webcamRef}
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <x.div position="absolute" top={0} w="100vw">
          <x.h1 bg="overlay" textAlign="center" margin="auto">
            baerenfamilie.wedding
          </x.h1>
        </x.div>
      </Layout>
    </XStyled>
  );
};

export default IndexPage;
