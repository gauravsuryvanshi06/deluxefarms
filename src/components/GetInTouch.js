// src/components/GetInTouch.js

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS

const Container = styled.div`
  padding: 100px 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #6ab04c;
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background-color: #6ab04c;
  color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.1rem;

  svg {
    margin-right: 15px;
    font-size: 1.5rem;
  }
`;

const FormSection = styled.div`
  flex: 2;
  padding: 40px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

const StyledField = styled(Field)`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #6ab04c;
  }
`;

const ErrorText = styled.div`
  color: #e74c3c;
  margin-top: -15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
`;

const SubmitButton = styled(motion.button)`
  padding: 12px 20px;
  background-color: #6ab04c;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #58a037;
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  color: #2ecc71;
  font-size: 1.1rem;
  text-align: center;
`;

const grapeVarieties = [
  { name: 'Chardonnay', price: 10 },
  { name: 'Merlot', price: 12 },
  { name: 'Cabernet Sauvignon', price: 15 },
  { name: 'Pinot Noir', price: 14 },
];

const GetInTouch = () => {
  const initialValues = {
    name: '',
    email: '',
    grapeVariety: '',
    quantity: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    grapeVariety: Yup.string().required('Please select a grape variety'),
    quantity: Yup.number()
      .required('Quantity is required')
      .positive('Quantity must be positive')
      .integer('Quantity must be an integer'),
  });

  const handleSubmit = async (
    values,
    { resetForm, setSubmitting, setStatus }
  ) => {
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        grape_variety: values.grapeVariety,
        quantity: values.quantity,
        to_email: 'contact@deluxefarms.com', // Recipient email address
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );

      setStatus({ success: true });
      resetForm();
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ success: false });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Title>Get In Touch</Title>
      <Content>
        <ContactInfo>
          <InfoItem>
            <FaEnvelope />
            <span>contact@deluxefarms.com</span>
          </InfoItem>
          <InfoItem>
            <FaPhone />
            <span>+1 (234) 567-890</span>
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt />
            <span>123 Farm Lane, Green City, Country</span>
          </InfoItem>
        </ContactInfo>
        <FormSection>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, status }) => (
              <StyledForm>
                <Label htmlFor="name">Name</Label>
                <StyledField
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => <ErrorText>{msg}</ErrorText>}
                />

                <Label htmlFor="email">Email</Label>
                <StyledField
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <ErrorText>{msg}</ErrorText>}
                />

                <Label htmlFor="grapeVariety">Grape Variety</Label>
                <StyledField
                  as="select"
                  id="grapeVariety"
                  name="grapeVariety"
                >
                  <option value="">Select a grape variety</option>
                  {grapeVarieties.map((grape) => (
                    <option key={grape.name} value={grape.name}>
                      {grape.name} - ${grape.price} per kg
                    </option>
                  ))}
                </StyledField>
                <ErrorMessage
                  name="grapeVariety"
                  render={(msg) => <ErrorText>{msg}</ErrorText>}
                />

                <Label htmlFor="quantity">Quantity (kg)</Label>
                <StyledField
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="Enter quantity in kg"
                />
                <ErrorMessage
                  name="quantity"
                  render={(msg) => <ErrorText>{msg}</ErrorText>}
                />

                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting Order...' : 'Submit Order'}
                </SubmitButton>

                {status && status.success && (
                  <SuccessMessage>
                    Thank you! Your order has been submitted successfully.
                  </SuccessMessage>
                )}
                {status && status.success === false && (
                  <ErrorText>
                    Oops! Something went wrong. Please try again later.
                  </ErrorText>
                )}
              </StyledForm>
            )}
          </Formik>
        </FormSection>
      </Content>
      {/* Optional: Google Map Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019907741829!2d-122.4194154846813!3d37.774929779759415!2m3!1f0!2f0!3f0.0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3d4e3f3b%3A0x1234567890abcdef!2sDeluxe%20Farms!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: '10px', marginTop: '40px' }}
        allowFullScreen=""
        loading="lazy"
        title="Deluxe Farms Location"
      ></iframe>
    </Container>
  );
};

export default GetInTouch;
