// src/components/Header.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${({ scrolled }) => (scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none')};
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  @media(max-width: 768px){
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  margin-left: 2rem;
  cursor: pointer;
  position: relative;
`;

const CTAButton = styled(motion.a)`
  margin-left: 2rem;
  padding: 0.5rem 1rem;
  background-color: #6ab04c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media(max-width: 768px){
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 80){
      setScrolled(true);
    } else{
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Navbar scrolled={scrolled}>
      <NavContainer>
        <Logo
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Deluxe Farms
        </Logo>
        <NavLinks>
          <NavLink
            variants={navVariants}
            whileHover="hover"
          >
            <Link to="hero" smooth={true} duration={500}>Home</Link>
          </NavLink>
          <NavLink
            variants={navVariants}
            whileHover="hover"
          >
            <Link to="why-choose" smooth={true} duration={500}>Why Choose Us</Link>
          </NavLink>
          <NavLink
            variants={navVariants}
            whileHover="hover"
          >
            <Link to="featured-products" smooth={true} duration={500}>Products</Link>
          </NavLink>
          <NavLink
            variants={navVariants}
            whileHover="hover"
          >
            <Link to="about-process" smooth={true} duration={500}>Process</Link>
          </NavLink>
          <NavLink
            variants={navVariants}
            whileHover="hover"
          >
            <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
          </NavLink>
          <NavLink
            variants={navVariants}
            whileHover="hover"
          >
            <Link to="sustainability" smooth={true} duration={500}>Sustainability</Link>
          </NavLink>
        </NavLinks>
        <CTAButton
          variants={buttonVariants}
          initial="rest"
          animate="pulse"
          whileHover="hover"
          href="#contact"
        >
          Get in Touch
        </CTAButton>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </Hamburger>
      </NavContainer>
      {/* Mobile Menu can be implemented here */}
    </Navbar>
  );
};

export default Header;
