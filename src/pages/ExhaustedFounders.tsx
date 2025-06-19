
import React from 'react';
import DynamicHeader from '@/components/layout/DynamicHeader';
import { FoundersHero } from '@/components/solutions/founders/FoundersHero';
import { ProblemSection } from '@/components/solutions/founders/ProblemSection';
import { SolutionFeatures } from '@/components/solutions/founders/SolutionFeatures';
import { ROISection } from '@/components/solutions/founders/ROISection';
import { SuccessStory } from '@/components/solutions/founders/SuccessStory';
import { CallToAction } from '@/components/solutions/founders/CallToAction';

const ExhaustedFounders = () => {
  return (
    <>
      <DynamicHeader />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <FoundersHero />
          <ProblemSection />
          <SolutionFeatures />
          <ROISection />
          <SuccessStory />
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default ExhaustedFounders;
