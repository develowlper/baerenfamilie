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
        <x.h1 margin="auto">baerenfamilie.wedding</x.h1>
      </Layout>
    </XStyled>
  );
};

export default IndexPage;
