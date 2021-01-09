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

const CameraStream = styled(Webcam)`
  width: 100vw;
  height: 100vh;
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const IndexPage = () => {
  const webcamRef = React.useRef();
  const capture = React.useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    return image;
  }, []);

  const handleSubmit = React.useCallback(async () => {
    //const image = capture();
    console.log('IMAGE');
    try {
      const res = await fetch('/.netlify/functions/get3Link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ one: 'test' }),
      });
      console.log('FORM SUBMITTED', res);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }, []);

  return (
    <XStyled>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <CameraStream audio={false} ref={webcamRef} />
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
            <form
              name="image"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="image" />
              <x.button
                bg="cool"
                w="50px"
                h="50px"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                type="submit"
              >
                <CameraIcon />
              </x.button>
            </form>
          </x.div>
        </x.div>
      </Layout>
    </XStyled>
  );
};

export default IndexPage;
