// src/components/WhyChoose.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLeaf, FaShippingFast, FaThumbsUp } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const PointsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Point = styled(motion.div)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.2);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #6ab04c;
  margin-bottom: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover{
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    border-radius: 50%;
    padding: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const WhyChoose = () => {
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x:0, opacity:1, transition: { duration: 1 } }
  };

  const pointVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity:1, y:0,
      transition: { delay: i * 0.3, duration: 0.8 }
    })
  };

  const points = [
    {
      icon: <FaLeaf />,
      title: 'Organic Farming',
      description: 'We use sustainable and organic farming practices to ensure the highest quality grapes.'
    },
    {
      icon: <FaShippingFast />,
      title: 'Global Shipping',
      description: 'Our efficient logistics ensure timely delivery of your orders worldwide.'
    },
    {
      icon: <FaThumbsUp />,
      title: 'Customer Satisfaction',
      description: 'We prioritize our clients’ needs to deliver exceptional service every time.'
    },
  ];

  return (
    <Section>
      <Title
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Why Choose Deluxe Farms
      </Title>
      <PointsContainer>
        {points.map((point, index) => (
          <Point
            key={index}
            custom={index}
            variants={pointVariants}
            initial="hidden"
            animate="visible"
          >
            <Icon>{point.icon}</Icon>
            <h3>{point.title}</h3>
            <Description>{point.description}</Description>
          </Point>
        ))}
      </PointsContainer>
    </Section>
  );
};

export default WhyChoose;
