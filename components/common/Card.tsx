
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo?: string; // Optional link for the card
  tags?: string[];
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, linkTo, tags }) => {
  const cardContent = (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out h-full flex flex-col">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description.substring(0,100)}...</p>
        {tags && tags.length > 0 && (
          <div className="mb-4">
            {tags.map(tag => (
              <span key={tag} className="inline-block bg-green-100 text-green-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        {linkTo && (
           <div className="mt-auto">
             <span className="text-green-500 hover:text-green-600 font-medium transition-colors duration-200">
                Learn More &rarr;
             </span>
           </div>
        )}
      </div>
    </div>
  );

  return linkTo ? <Link to={linkTo}>{cardContent}</Link> : cardContent;
};

export default Card;
    