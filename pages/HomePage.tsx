
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import FeaturedExperiences from '../components/home/FeaturedExperiences';
import NewsletterSignup from '../components/general/NewsletterSignup';
import Section from '../components/common/Section';
import { MAP_REGIONS, SAMPLE_TESTIMONIALS } from '../constants';
import { MapRegion, Testimonial } from '../types';
import Carousel from '../components/general/Carousel'; // Import Carousel

const InteractiveMapPlaceholder: React.FC = () => (
  <Section title="Explore by Region" subtitle="Discover the diverse provinces of Sri Lanka">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <img src="https://picsum.photos/seed/srilankamap/800/600" alt="Map of Sri Lanka" className="rounded-lg shadow-xl w-full object-cover" />
        <p className="text-sm text-gray-500 mt-2 text-center">Illustrative map of Sri Lanka. Click regions below to learn more.</p>
      </div>
      <div className="space-y-4">
        {MAP_REGIONS.map((region: MapRegion) => (
          <div key={region.id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h4 className="text-xl font-semibold text-green-600">{region.name}</h4>
            <p className="text-gray-600 mt-1 text-sm">{region.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const TestimonialsSection: React.FC = () => {
  const carouselItems = SAMPLE_TESTIMONIALS.map((testimonial: Testimonial) => ({
    imageUrl: testimonial.imageUrl, // Using person's image as background for quote might not be ideal, but for demo.
                                      // Or better, use a generic scenic image and overlay quote.
                                      // For now, let's use a generic image for BG for testimonial carousel
    caption: `"${testimonial.quote}" - ${testimonial.name}`,
    title: `From ${testimonial.name}`
  }));

  const testimonialBackgrounds = [
    { imageUrl: 'https://picsum.photos/seed/testimonialbg1/800/400' },
    { imageUrl: 'https://picsum.photos/seed/testimonialbg2/800/400' },
    { imageUrl: 'https://picsum.photos/seed/testimonialbg3/800/400' },
  ];
  
  const itemsForCarousel = SAMPLE_TESTIMONIALS.map((testimonial, index) => ({
    imageUrl: testimonialBackgrounds[index % testimonialBackgrounds.length].imageUrl,
    title: `A word from ${testimonial.name}`,
    caption: `"${testimonial.quote}"`,
  }));


  return (
    <Section title="What Our Travelers Say" subtitle="Hear from those who've experienced the magic">
      <Carousel items={itemsForCarousel} autoPlayInterval={7000} />
    </Section>
  );
};


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedDestinations />
      <FeaturedExperiences />
      <InteractiveMapPlaceholder />
      <TestimonialsSection />
      <NewsletterSignup />
    </>
  );
};

export default HomePage;
    