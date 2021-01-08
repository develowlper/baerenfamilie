import React from 'react';
import { x } from '@xstyled/styled-components';
import XStyled from '../components/XStyled';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <XStyled>
      <Layout>
        <main>
          <x.h1 margin="auto">baerenfamilie.wedding</x.h1>
        </main>
      </Layout>
    </XStyled>
  );
};

export default IndexPage;
