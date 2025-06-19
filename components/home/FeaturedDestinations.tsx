
import React from 'react';
import { SAMPLE_DESTINATIONS } from '../../constants';
import Card from '../common/Card';
import Section from '../common/Section';
import { Link } from 'react-router-dom';

const FeaturedDestinations: React.FC = () => {
  const featured = SAMPLE_DESTINATIONS.slice(0, 3); // Show first 3

  return (
    <Section title="Top Destinations" subtitle="Explore the most iconic places in Sri Lanka">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map(destination => (
          <Card
            key={destination.id}
            title={destination.name}
            description={destination.description}
            imageUrl={destination.imageUrl}
            linkTo={`/destinations#${destination.id}`} // Simple anchor link for demo
            tags={destination.region ? [destination.region] : []}
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link 
            to="/destinations" 
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition-colors duration-300">
          View All Destinations
        </Link>
      </div>
    </Section>
  );
};

export default FeaturedDestinations;
    