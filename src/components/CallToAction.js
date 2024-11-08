// src/components/CallToAction.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import grapesBackground from '../assets/images/grapes-background.jpg'; // Ensure you have this image

const Banner = styled.section`
  padding: 4rem 2rem;
  background-image: url(${grapesBackground});
  background-size: cover;
  background-position: center;
  position: relative;
  color: #fff;
  text-align: center;
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

const Text = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion.a)`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #6ab04c, #58a836);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover{
    transform: scale(1.05);
  }
`;

const CallToAction = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity:1, y:0, 
      transition: { 
        duration: 1,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      background: 'linear-gradient(45deg, #58a836, #6ab04c)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <Banner>
      <Overlay />
      <Content>
        <Text
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Ready to Experience Premium Grapes? Let's Talk!
        </Text>
        <CTAButton
          variants={buttonVariants}
          whileHover="hover"
          href="#contact"
        >
          Get Started
        </CTAButton>
      </Content>
    </Banner>
  );
};

export default CallToAction;
