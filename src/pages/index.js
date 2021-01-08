import React from 'react';
import { x } from '@xstyled/styled-components';
import XStyled from '../components/XStyled';
import Layout from '../components/Layout';
import VideoStream from '../components/VideoStream';

const IndexPage = () => {
  return (
    <XStyled>
      <Layout>
        <VideoStream />
        <x.div position="absolute" top={0} w="100vw">
          <x.h1 bg="background" textAlign="center" margin="auto">
            baerenfamilie.wedding
          </x.h1>
        </x.div>
      </Layout>
    </XStyled>
  );
};

export default IndexPage;
