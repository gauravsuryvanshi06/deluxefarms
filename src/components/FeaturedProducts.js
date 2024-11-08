// src/components/FeaturedProducts.js
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
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SlideContent = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${SlideContent}:hover & {
    transform: scale(1.05);
  }
`;

const SlideOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 1rem;
  transform: translateY(100%);
`;

const LearnMore = styled.a`
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
`;

const ViewAllButton = styled(motion.button)`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #6ab04c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #58a836;
  }
`;

const FeaturedProducts = () => {
  const titleVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };
// eslint-disable-next-line no-unused-vars
  const productVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const viewAllVariants = {
    hover: {
      scale: 1.05,
      background: ["#6ab04c", "#58a836", "#6ab04c"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const products = [
    {
      image: "https://th.bing.com/th/id/OIP.B52UjlBQY8jWb7ipfnowkgHaHa?rs=1&pid=ImgDetMain",
      name: "Grape Variety 1",
      description:
        "Premium quality grapes known for their sweetness and flavor.",
    },
    {
      image: "https://via.placeholder.com/800x400.png?text=Grape+Variety+2",
      name: "Grape Variety 2",
      description: "Ideal for wine production with rich aromatic profiles.",
    },
    {
      image: "https://via.placeholder.com/800x400.png?text=Grape+Variety+3",
      name: "Grape Variety 3",
      description: "Perfect for fresh consumption with crisp texture.",
    },
    // Add more products as needed
  ];

  return (
    <Section>
      <Title variants={titleVariants} initial="hidden" animate="visible">
        Our Premium Grape Varieties
      </Title>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <SlideContent whileHover={{ scale: 1.02 }}>
              <SlideImage src={product.image} alt={product.name} />
              <SlideOverlay
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <LearnMore href="#learn-more">Learn More</LearnMore>
              </SlideOverlay>
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
      <ViewAllButton
        variants={viewAllVariants}
        whileHover="hover"
        href="#all-products"
      >
        View All Products
      </ViewAllButton>
    </Section>
  );
};

export default FeaturedProducts;
