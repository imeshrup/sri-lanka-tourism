
import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = 'py-12 md:py-16', titleClassName = 'text-3xl md:text-4xl font-bold text-center text-gray-800', subtitleClassName = 'mt-2 text-lg text-center text-gray-600' }) => {
  return (
    <section className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
      <div className="mt-8 md:mt-12">
        {children}
      </div>
    </section>
  );
};

export default Section;
    