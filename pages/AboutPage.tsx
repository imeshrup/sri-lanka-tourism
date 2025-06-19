
import React from 'react';
import Section from '../components/common/Section';
import { FaUsers, FaHandsHelping, FaGlobeAsia } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <Section title="About SriLanka.travel" subtitle="Your trusted partner in exploring the Pearl of the Indian Ocean">
      <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center text-green-600 mb-4">
            <FaGlobeAsia size={40} className="mr-4" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
          </div>
          <p>
            At SriLanka.travel, our mission is to showcase the unparalleled beauty, rich heritage, and vibrant culture of Sri Lanka to the world. We aim to provide travelers with comprehensive, reliable information and seamless booking experiences, fostering sustainable tourism that benefits local communities and preserves the natural environment.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center text-green-600 mb-4">
            <FaUsers size={40} className="mr-4" />
            <h3 className="text-2xl font-semibold">Who We Are</h3>
          </div>
          <p>
            We are a passionate team of travel enthusiasts, local experts, and digital innovators dedicated to making your Sri Lankan adventure unforgettable. With deep roots in Sri Lanka and a global perspective on travel, we curate unique experiences and provide insider tips to help you discover the true essence of our island nation.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center text-green-600 mb-4">
             <FaHandsHelping size={40} className="mr-4" />
            <h3 className="text-2xl font-semibold">Our Commitment</h3>
          </div>
          <p>
            We are committed to responsible travel, promoting eco-friendly practices, and supporting local economies. We believe in creating authentic connections between travelers and the destinations they visit, ensuring a positive impact for everyone involved. Your journey with us helps contribute to the preservation of Sri Lanka's unique treasures for generations to come.
          </p>
        </div>

        <div className="mt-12 text-center">
            <img src="https://picsum.photos/seed/team/600/300" alt="Our Team" className="rounded-lg shadow-xl mx-auto"/>
            <p className="mt-4 text-sm text-gray-500">Our passionate team is ready to help you plan your dream Sri Lankan holiday.</p>
        </div>
      </div>
    </Section>
  );
};

export default AboutPage;
    