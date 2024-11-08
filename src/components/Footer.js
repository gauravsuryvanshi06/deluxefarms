// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: #2d3436;
  color: #fff;
  padding: 2rem;
  position: relative;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover{
    color: #6ab04c;
    transform: rotate(10deg);
  }
`;

const ContactItem = styled.p`
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover{
    color: #6ab04c;
    cursor: pointer;
  }
`;

const BackToTop = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #6ab04c;
  color: #fff;
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(window.pageYOffset > 300){
      setIsVisible(true);
    } else{
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const backToTopVariants = {
    hover: { 
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <FooterContainer>
      <Content>
        <ContactInfo>
          <h3>Contact Us</h3>
          <ContactItem>📞 +999999999</ContactItem>
          <ContactItem>📧 contact@deluxefarms.in</ContactItem>
          <ContactItem>📍 123 Address TEJAS EDITING...</ContactItem>
        </ContactInfo>
        <ContactInfo>
          <h3>Follow Us</h3>
          <SocialIcons>
            <IconLink href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </IconLink>
            <IconLink href="https://twitter.com" target="_blank">
              <FaTwitter />
            </IconLink>
            <IconLink href="https://instagram.com" target="_blank">
              <FaInstagram />
            </IconLink>
            <IconLink href="https://linkedin.com" target="_blank">
              <FaLinkedinIn />
            </IconLink>
          </SocialIcons>
        </ContactInfo>
      </Content>
      <BackToTop
        visible={isVisible}
        onClick={scrollToTop}
        variants={backToTopVariants}
        whileHover="hover"
      >
        <FaArrowUp />
      </BackToTop>
    </FooterContainer>
  );
};

export default Footer;
