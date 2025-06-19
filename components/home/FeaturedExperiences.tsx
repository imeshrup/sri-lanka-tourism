
import React from 'react';
import { SAMPLE_EXPERIENCES } from '../../constants';
import Card from '../common/Card';
import Section from '../common/Section';
import { Link } from 'react-router-dom';

const FeaturedExperiences: React.FC = () => {
  const featured = SAMPLE_EXPERIENCES.slice(0, 3); // Show first 3

  return (
    <Section title="Unforgettable Experiences" subtitle="Immerse yourself in the unique activities Sri Lanka offers" className="py-12 md:py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map(experience => (
          <Card
            key={experience.id}
            title={experience.name}
            description={experience.description}
            imageUrl={experience.imageUrl}
            linkTo={`/experiences#${experience.id}`} // Simple anchor link for demo
            tags={experience.category ? [experience.category] : []}
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link 
            to="/experiences" 
            className="px-6 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-lg shadow hover:bg-yellow-600 transition-colors duration-300">
          Discover More Experiences
        </Link>
      </div>
    </Section>
  );
};

export default FeaturedExperiences;
    