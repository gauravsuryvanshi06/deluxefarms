// src/App.js
import React from 'react';
import { Element } from 'react-scroll';
import AboutProcess from './components/AboutProcess';
import CallToAction from './components/CallToAction';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import WhyChoose from './components/WhyChoose';

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
      <Footer />
    </div>
  );
};
 





export default App;
