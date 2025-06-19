
import React from 'react';
import { SAMPLE_EXPERIENCES } from '../constants';
import { Experience } from '../types';
import Card from '../components/common/Card';
import Section from '../components/common/Section';
import ImageGallery from '../components/general/ImageGallery';

const ExperiencesPage: React.FC = () => {
  const galleryImages = SAMPLE_EXPERIENCES.slice(0, 10).map(e => ({ src: e.imageUrl, alt: e.name }));

  return (
    <>
      <Section 
        title="Unique Experiences" 
        subtitle="From thrilling adventures to cultural immersions, create memories that last a lifetime."
        className="bg-yellow-50 py-16 md:py-20"
        titleClassName="text-4xl md:text-5xl font-bold text-center text-yellow-700"
        subtitleClassName="mt-4 text-xl text-center text-yellow-600"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SAMPLE_EXPERIENCES.map((experience: Experience) => (
             <div key={experience.id} id={experience.id} className="scroll-mt-20"> {/* scroll-mt for anchor links */}
              <Card
                title={experience.name}
                description={experience.description}
                imageUrl={experience.imageUrl}
                tags={experience.category ? [experience.category] : []}
                // linkTo={`/experience/${experience.id}`} // For a detail page if implemented
              />
            </div>
          ))}
        </div>
      </Section>
      <ImageGallery images={galleryImages} title="Experience Snapshots" />
    </>
  );
};

export default ExperiencesPage;
    