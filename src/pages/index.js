import React from 'react';
import styled, { x } from '@xstyled/styled-components';
import Webcam from 'react-webcam';
import XStyled from '../components/XStyled';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { MdCamera } from 'react-icons/md';

const CameraIcon = styled(MdCamera)`
  font-size: 40px;
  color: bg;
`;

const IndexPage = () => {
  const webcamRef = React.useRef();

  const capture = React.useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    console.log(image);
  }, []);

  return (
    <XStyled>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Webcam
            audio={false}
            ref={webcamRef}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </motion.div>
        <x.div
          position="absolute"
          top={0}
          w="100vw"
          h="100vh"
          display="grid"
          gridTemplateRows="auto 1fr auto"
          gridTemplateColumns="1fr"
        >
          <x.h1
            fontSize="24px"
            bg="overlay"
            textAlign="center"
            margin="auto"
            w={1}
          >
            baerenfamilie.wedding
          </x.h1>
          <x.div></x.div>
          <x.div
            h="100px"
            bg="overlay"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <x.button
              bg="cool"
              w="50px"
              h="50px"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={capture}
            >
              <CameraIcon />
            </x.button>
          </x.div>
        </x.div>
      </Layout>
    </XStyled>
  );
};

export default IndexPage;
