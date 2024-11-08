// src/components/AboutProcess.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSeedling, FaSort, FaBox, FaShip } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProcessContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  position: relative;
`;

const Step = styled(motion.div)`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  width: 200px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover{
    background-color: #e6f5d0;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #6ab04c;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover{
    transform: translateY(-5px);
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: #555;
`;

const Connector = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 100%;
  background-color: #6ab04c;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const AboutProcess = () => {
  const titleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y:0, opacity:1, transition: { duration: 1 } }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity:1, y:0,
      transition: { delay: i * 0.3, duration: 0.8 }
    })
  };

  const steps = [
    {
      icon: <FaSeedling />,
      title: 'Harvesting',
      description: 'Handpicked grapes to ensure only the best quality.'
    },
    {
      icon: <FaSort />,
      title: 'Sorting',
      description: 'Meticulous sorting process to eliminate imperfections.'
    },
    {
      icon: <FaBox />,
      title: 'Packaging',
      description: 'Secure packaging to maintain freshness during transit.'
    },
    {
      icon: <FaShip />,
      title: 'Shipping',
      description: 'Reliable shipping partners for timely global delivery.'
    },
  ];

  return (
    <Section>
      <Title
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        From Farm to Your Table
      </Title>
      <ProcessContainer>
        {steps.map((step, index) => (
          <Step
            key={index}
            custom={index}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <Icon>{step.icon}</Icon>
            <h3>{step.title}</h3>
            <Description>{step.description}</Description>
          </Step>
        ))}
        <Connector />
      </ProcessContainer>
    </Section>
  );
};

export default AboutProcess;
