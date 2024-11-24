import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: white;
  color: #fff;
  padding: 3rem 2rem;
  position: relative;
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
color: black;
  h3 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #6ab04c;
  }

  p {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
color: black;
  svg {
    margin-right: 0.75rem;
    font-size: 2rem;
    color: #6ab04c;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #6ab04c;
    }
  }

  span {
    font-size: 1.25rem;
  }
`;

const BackToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.75rem;
  cursor: pointer;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #58a037;
    transform: scale(1.1);
  }
`;

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const backToTopVariants = {
    hover: { 
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <FooterContainer>
      <ContactContainer>
        <h3>Contact Us</h3>
        <ContactItem>
          <FaEnvelope />
          <a href="mailto:contact@deluxefarms.com">contact@deluxefarms.com</a>
        </ContactItem>
        <ContactItem>
          <FaPhone />
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </ContactItem>
        <ContactItem>
          <FaMapMarkerAlt />
          <span>123 Farm Lane, Green City, Country</span>
        </ContactItem>
        <p>We’re here to help! Reach out to us anytime, and we’ll respond as soon as possible.</p>
      </ContactContainer>
      <BackToTopButton
        visible={isVisible}
        onClick={scrollToTop}
        variants={backToTopVariants}
        whileHover="hover"
        aria-label="Back to Top"
      >
        <FaPhone />
      </BackToTopButton>
    </FooterContainer>
  );
};

export default Footer;
