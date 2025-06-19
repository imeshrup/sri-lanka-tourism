
import React from 'react';
import Section from '../components/common/Section';
import ContactForm from '../components/general/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <Section title="Get In Touch" subtitle="We'd love to hear from you! Whether you have questions, feedback, or need help planning your trip.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="order-2 md:order-1">
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="order-1 md:order-2 bg-green-50 p-8 rounded-lg shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Contact Information</h3>
          
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-green-500 mt-1 mr-4 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-gray-800">Our Office</h4>
              <p className="text-gray-600">123 Paradise Road, Colombo 03, Sri Lanka</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaEnvelope className="text-green-500 mt-1 mr-4 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-gray-800">Email Us</h4>
              <p className="text-gray-600">info@srilanka.travel</p>
              <p className="text-gray-600">support@srilanka.travel</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaPhone className="text-green-500 mt-1 mr-4 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-gray-800">Call Us</h4>
              <p className="text-gray-600">+94 11 2345 678 (General Inquiries)</p>
              <p className="text-gray-600">+94 77 1234 567 (24/7 Support)</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-green-200">
            <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
       {/* Placeholder for map iframe or image */}
       <div className="mt-12 rounded-lg overflow-hidden shadow-xl">
          <img src="https://picsum.photos/seed/colombomap/1200/400" alt="Map to our office" className="w-full h-64 md:h-96 object-cover" />
          {/* Or an iframe for a real map:
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d... (your map embed code)" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          */}
        </div>
    </Section>
  );
};

export default ContactPage;
    