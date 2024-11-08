// // src/components/Hero.js
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { Parallax } from 'react-parallax';

// import heroVideo from '/src/assets/hero-video.mp4.mp4'

// import heroImage from '../assets/images/hero-image.jpg';

// const HeroSection = styled.section`
//   height: 100vh;
//   position: relative;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top:0;
//   left:0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0,0,0,0.5);
// `;

// const Content = styled.div`
//   position: relative;
//   text-align: center;
//   z-index: 2;
//   max-width: 800px;
//   padding: 0 1rem;
// `;

// const Title = styled(motion.h1)`
//   font-size: 3rem;
//   margin-bottom: 1rem;

//   @media(max-width:768px){
//     font-size: 2.5rem;
//   }
// `;

// const Subheading = styled(motion.p)`
//   font-size: 1.5rem;
//   margin-bottom: 2rem;

//   @media(max-width:768px){
//     font-size: 1.2rem;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   flex-wrap: wrap;
// `;

// const CTAButton = styled(motion.a)`
//   padding: 0.75rem 1.5rem;
//   background-color: #6ab04c;
//   color: #fff;
//   border-radius: 5px;
//   text-decoration: none;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover{
//     background-color: #58a836;
//   }
// `;

// const Hero = () => {
//   const titleVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity:1, y:0, transition: { duration: 1 } }
//   };

//   const subheadingVariants = {
//     hidden: { opacity: 0, width: 0 },
//     visible: { opacity:1, width: '100%', transition: { duration: 1, delay: 1 } }
//   };

//   const buttonVariants = {
//     hover: { 
//       scale: 1.05,
//       transition: { duration: 0.3 }
//     }
//   };

//   return (
//     <Parallax bgImage={heroImage} strength={500}>
//       <HeroSection>
//         <Overlay />
//         <Content>
//           <Title
//             variants={titleVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             Exporting the Finest Grapes Worldwide
//           </Title>
//           <Subheading
//             variants={subheadingVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             Delivering premium quality grapes from our vineyards to your table.
//           </Subheading>
//           <ButtonGroup>
//             <CTAButton
//               variants={buttonVariants}
//               whileHover="hover"
//               href="#featured-products"
//             >
//               Explore Our Grapes
//             </CTAButton>
//             <CTAButton
//               variants={buttonVariants}
//               whileHover="hover"
//               href="#about-process"
//             >
//               Learn More About Our Process
//             </CTAButton>
//           </ButtonGroup>
//         </Content>
//       </HeroSection>
//     </Parallax>
//   );
// };

// export default Hero;
// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroVideo from '../assets/videos/hero-video.mp4.mp4'; // Corrected import path

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheading = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const CTAButton = styled(motion.a)`
  padding: 0.75rem 1.5rem;
  background-color: #6ab04c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #58a836;
  }
`;

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: '100%', transition: { duration: 1, delay: 1 } },
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
    <HeroSection>
      <VideoBackground
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <Overlay />
      <Content>
        <Title
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Exporting the Finest Grapes Worldwide
        </Title>
        <Subheading
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          Delivering premium quality grapes from our vineyards to your table.
        </Subheading>
        <ButtonGroup>
          <CTAButton
            variants={buttonVariants}
            initial="rest"
            animate="pulse"
            whileHover="hover"
            href="#featured-products"
          >
            Explore Our Grapes
          </CTAButton>
          <CTAButton
            variants={buttonVariants}
            initial="rest"
            animate="pulse"
            whileHover="hover"
            href="#about-process"
          >
            Learn More About Our Process
          </CTAButton>
        </ButtonGroup>
      </Content>
    </HeroSection>
  );
};

export default Hero;
