
import React from 'react';
import DynamicHeader from '@/components/layout/DynamicHeader';
import { TeamsHero } from '@/components/solutions/teams/TeamsHero';
import { ChallengeSection } from '@/components/solutions/teams/ChallengeSection';
import { SolutionFeatures } from '@/components/solutions/teams/SolutionFeatures';
import { ROISection } from '@/components/solutions/teams/ROISection';
import { SuccessStory } from '@/components/solutions/teams/SuccessStory';
import { CallToAction } from '@/components/solutions/teams/CallToAction';

const GrowingTeams = () => {
  return (
    <>
      <DynamicHeader />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <TeamsHero />
          <ChallengeSection />
          <SolutionFeatures />
          <ROISection />
          <SuccessStory />
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default GrowingTeams;
