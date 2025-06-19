import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import moved marketing pages
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import AccountancyPricing from './pages/AccountancyPricing';
import BeanstalkTest from './pages/BeanstalkTest';
import Method365 from './pages/Method365';
import HowItWorks from './pages/HowItWorks';
import BuildYourBoard from './pages/BuildYourBoard';
import MeetTheBoard from './pages/MeetTheBoard';
import AIBoard from './pages/AIBoard';
import Community from './pages/Community';

// Import solution pages
import GrowingTeams from './pages/GrowingTeams';
import ExhaustedFounders from './pages/ExhaustedFounders';
import SideHustlers from './pages/SideHustlers';

export const App = () => {
  return (
    <Routes>
      {/* Main landing page */}
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Landing />} />
      
      {/* Marketing pages */}
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/accountancy-pricing" element={<AccountancyPricing />} />
      <Route path="/beanstalk-test" element={<BeanstalkTest />} />
      <Route path="/365-method" element={<Method365 />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/build-your-board" element={<BuildYourBoard />} />
      <Route path="/meet-the-board" element={<MeetTheBoard />} />
      <Route path="/ai-board" element={<AIBoard />} />
      <Route path="/community" element={<Community />} />
      
      {/* Solution pages */}
      <Route path="/solutions/growing-teams" element={<GrowingTeams />} />
      <Route path="/solutions/exhausted-founders" element={<ExhaustedFounders />} />
      <Route path="/solutions/side-hustlers" element={<SideHustlers />} />
      
      {/* Catch all - redirect to home */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
};

export default App; 