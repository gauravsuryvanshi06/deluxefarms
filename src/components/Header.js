// src/components/Header.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

// Styled Components

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: #6ab04c; /* Green background */
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
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
  color: #fff; /* White text */
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinkItem = styled(motion.li)`
  margin-left: 2rem;
  cursor: pointer;
  position: relative;

  a {
    color: #fff; /* White text */
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #e0e0e0;
    }
  }
`;

const CTAButton = styled(motion.button)`
  margin-left: 2rem;
  padding: 0.5rem 1rem;
  background-color: #fff; /* White background */
  color: #6ab04c; /* Green text */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none; /* Remove underline */
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    color: #58a037;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff; /* White icon */

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  width: 100%;
  height: 100vh;
  background-color: #6ab04c; /* Green background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  li {
    margin: 1.5rem 0;
  }

  a {
    color: #fff; /* White text */
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #e0e0e0;
    }
  }
`;

// Header Component

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle Scroll to change navbar background
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Variants for framer-motion animations
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
    <>
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
            <NavLinkItem variants={navVariants} whileHover="hover">
              <ScrollLink to="hero" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </NavLinkItem>
            <NavLinkItem variants={navVariants} whileHover="hover">
              <ScrollLink to="why-choose" smooth={true} duration={500}>
                Why Choose Us
              </ScrollLink>
            </NavLinkItem>
            <NavLinkItem variants={navVariants} whileHover="hover">
              <ScrollLink to="featured-products" smooth={true} duration={500}>
                Products
              </ScrollLink>
            </NavLinkItem>
            <NavLinkItem variants={navVariants} whileHover="hover">
              <ScrollLink to="about-process" smooth={true} duration={500}>
                Process
              </ScrollLink>
            </NavLinkItem>
            <NavLinkItem variants={navVariants} whileHover="hover">
              <ScrollLink to="testimonials" smooth={true} duration={500}>
                Testimonials
              </ScrollLink>
            </NavLinkItem>
            <NavLinkItem variants={navVariants} whileHover="hover">
              <ScrollLink to="sustainability" smooth={true} duration={500}>
                Sustainability
              </ScrollLink>
            </NavLinkItem>
          </NavLinks>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <CTAButton
              variants={buttonVariants}
              initial="rest"
              animate="pulse"
              whileHover="hover"
            >
              Get in Touch
            </CTAButton>
          </ScrollLink>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </Hamburger>
        </NavContainer>
        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen}>
          <li>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="why-choose"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="featured-products"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Products
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about-process"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Process
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="sustainability"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Sustainability
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </ScrollLink>
          </li>
        </MobileMenu>
      </Navbar>
    </>
  );
};

export default Header;
