import React from 'react';
import { x } from '@xstyled/styled-components';
import XStyled from '../components/XStyled';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { image } from 'faker';

const images = new Array(10)
  .fill(null)
  .map((x) => 'https://https://picsum.photos/196/256');

const IndexPage = () => {
  return (
    <XStyled>
      <Layout>
        <x.header px={4} py={4}>
          <x.h1 textTransform="uppercase">gallery</x.h1>
        </x.header>
        <x.main px={4}>
          <x.div
            display="grid"
            justifyContent="center"
            gridTemplateColumns="repeat(4, 196px)"
            gap={2}
          >
            {images.map((image) => (
              <motion.div
                key="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <x.div
                  padding={2}
                  background="white"
                  borderRadius="2px"
                  h={256}
                >
                  <x.img width="100%" height="100%" src={image} />
                </x.div>
              </motion.div>
            ))}
          </x.div>
        </x.main>
      </Layout>
    </XStyled>
  );
};

export default IndexPage;
