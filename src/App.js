// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import FeaturedProducts from './components/FeaturedProducts';
import AboutProcess from './components/AboutProcess';
import Testimonials from './components/Testimonials';
import Sustainability from './components/Sustainability';
import CallToAction from './components/CallToAction';
import GetInTouch from './components/GetInTouch'; // Added this import
import Footer from './components/Footer';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="why-choose">
        <WhyChoose />
      </Element>
      <Element name="featured-products">
        <FeaturedProducts />
      </Element>
      <Element name="about-process">
        <AboutProcess />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="sustainability">
        <Sustainability />
      </Element>
      <Element name="call-to-action">
        <CallToAction />
      </Element>
      <Element name="contact"> {/* Added this section */}
        <GetInTouch />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
