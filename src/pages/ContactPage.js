// src/pages/ContactPage.js
import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 80px auto 2rem; /* Added top margin to avoid overlap with fixed header */
  font-family: Arial, sans-serif;
`;

const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Subheading = styled.h2`
  font-size: 1.2rem;
  color: #555;
`;

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ContactCard = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #6ab04c;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  margin: 0.5rem 0;
  color: #555;
`;

const Hyperlink = styled.a`
  color: #6ab04c;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4e8a39;
  }
`;

const AboutSection = styled.section`
  margin-top: 3rem;
`;

const AboutHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`;

const AboutText = styled.p`
  line-height: 1.6;
  color: #555;
`;

const FooterSection = styled.footer`
  text-align: center;
  margin-top: 4rem;
  font-size: 0.9rem;
  color: #999;
`;

const BackLink = styled(RouterLink)`
  display: inline-block;
  margin-top: 2rem;
  color: #6ab04c;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #4e8a39;
  }
`;

const ContactPage = () => {
  return (
    <Container>
      <HeaderSection>
        <Heading>Contact Us</Heading>
        <Subheading>We'd love to hear from you!</Subheading>
      </HeaderSection>
      <ContactSection>
        <ContactCard>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <ContactText>Email Us</ContactText>
          <Hyperlink href="mailto:example@example.com">example@example.com</Hyperlink>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <FaPhone />
          </IconWrapper>
          <ContactText>Call Us</ContactText>
          <Hyperlink href="tel:+1234567890">+1 (234) 567-890</Hyperlink>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <FaMapMarkerAlt />
          </IconWrapper>
          <ContactText>Visit Us</ContactText>
          <Hyperlink
            href="https://www.google.com/maps?q=Business+Location"
            target="_blank"
            rel="noopener noreferrer"
          >
            123 Farm Lane, AgriCity
          </Hyperlink>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <FaLinkedin />
          </IconWrapper>
          <ContactText>Connect on LinkedIn</ContactText>
          <Hyperlink href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </Hyperlink>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <FaTwitter />
          </IconWrapper>
          <ContactText>Follow Us on Twitter</ContactText>
          <Hyperlink href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            @YourTwitterHandle
          </Hyperlink>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <FaInstagram />
          </IconWrapper>
          <ContactText>See Us on Instagram</ContactText>
          <Hyperlink href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            @YourInstagramHandle
          </Hyperlink>
        </ContactCard>
      </ContactSection>
      <AboutSection>
        <AboutHeading>About Us</AboutHeading>
        <AboutText>
          We are dedicated to providing the best services for our customers. Our team is always
          available to assist with your needs. Feel free to reach out to us at any time!
        </AboutText>
      </AboutSection>
      <BackLink to="/">← Back to Home</BackLink>
      <FooterSection>
        &copy; {new Date().getFullYear()} Deluxe Farms. All Rights Reserved.
      </FooterSection>
    </Container>
  );
};

export default React.memo(ContactPage);
