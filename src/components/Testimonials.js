// src/components/Testimonials.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';


const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Testimonial = styled(motion.div)`
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Quote = styled(motion.p)`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const Client = styled(motion.h4)`
  font-size: 1rem;
  color: #6ab04c;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Testimonials = () => {
  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const testimonialVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const testimonials = [
    {
      quote:
        "Deluxe Farms provided us with the highest quality grapes that exceeded our expectations. Their professionalism and dedication are unmatched.",
      client: "John Doe, Winery Owner",
    },
    {
      quote:
        "The timely delivery and excellent customer service make Deluxe Farms our go-to grape supplier.",
      client: "Jane Smith, Importer",
    },
    {
      quote:
        "We appreciate the sustainable practices and premium products offered by Deluxe Farms. Highly recommended!",
      client: "Emily Johnson, Retailer",
    },
    // Add more testimonials as needed
  ];

  return (
    <Section>
      <Title variants={titleVariants} initial="hidden" animate="visible">
        What Our Clients Say
      </Title>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]} // Include the modules here
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Testimonial
              variants={testimonialVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <Quote
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              >
                "{testimonial.quote}"
              </Quote>
              <Client
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.5 },
                }}
              >
                - {testimonial.client}
              </Client>
            </Testimonial>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Testimonials;
