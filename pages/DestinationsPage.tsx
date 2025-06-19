
import React from 'react';
import { SAMPLE_DESTINATIONS } from '../constants';
import { Destination } from '../types';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import ImageGallery from '../components/general/ImageGallery';

const DestinationsPage: React.FC = () => {
  const galleryImages = SAMPLE_DESTINATIONS.slice(0, 10).map(d => ({ src: d.imageUrl, alt: d.name }));

  return (
    <>
      <Section 
        title="Our Destinations" 
        subtitle="Journey through Sri Lanka's most captivating cities, natural wonders, and historical sites."
        className="bg-green-50 py-16 md:py-20"
        titleClassName="text-4xl md:text-5xl font-bold text-center text-green-700"
        subtitleClassName="mt-4 text-xl text-center text-green-600"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SAMPLE_DESTINATIONS.map((destination: Destination) => (
            <div key={destination.id} id={destination.id} className="scroll-mt-20"> {/* scroll-mt for anchor links */}
              <Card
                title={destination.name}
                description={destination.description}
                imageUrl={destination.imageUrl}
                tags={destination.region ? [destination.region] : []}
                // linkTo={`/destination/${destination.id}`} // For a detail page if implemented
              />
            </div>
          ))}
        </div>
      </Section>
      <ImageGallery images={galleryImages} title="Destination Highlights" />
    </>
  );
};

export default DestinationsPage;
    