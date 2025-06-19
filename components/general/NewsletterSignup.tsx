
import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically integrate with an email service
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000); // Reset message after 5s
  };

  return (
    <div className="bg-green-600 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Stay Updated!</h3>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for the latest travel tips, exclusive offers, and inspiration for your Sri Lankan adventure.
        </p>
        {!subscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-green-700 font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <p className="text-xl font-semibold text-yellow-300">Thank you for subscribing!</p>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
    