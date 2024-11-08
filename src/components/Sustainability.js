// src/components/Sustainability.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import sustainabilityImage from '../assets/images/sustainability.jpg'; // Ensure you have this image

const Section = styled.section`
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ReadMore = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: border-bottom 0.3s ease, color 0.3s ease;

  &:hover{
    color: #6ab04c;
    border-bottom: 2px solid #6ab04c;
  }
`;

const Sustainability = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity:1, y:0, transition: { duration: 1 } }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity:1, transition: { duration: 1, delay: 0.5 } }
  };

  return (
    <Parallax bgImage={sustainabilityImage} strength={500}>
      <Section>
        <Overlay />
        <Content>
          <Title
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Our Commitment to Sustainability
          </Title>
          <Paragraph
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            At Deluxe Farms, we prioritize sustainable farming practices to protect our environment and ensure the highest quality grapes. Our commitment extends beyond cultivation to responsible packaging and ethical shipping methods.
          </Paragraph>
          <ReadMore
            whileHover={{ color: '#6ab04c' }}
            href="#read-more"
          >
            Read More
          </ReadMore>
        </Content>
      </Section>
    </Parallax>
  );
};

export default Sustainability;
