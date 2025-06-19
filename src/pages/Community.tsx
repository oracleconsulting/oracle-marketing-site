import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MessageSquare, Calendar, Hash, Lock, ExternalLink, TrendingUp } from 'lucide-react';
import { EmailCaptureForm } from '@/components/community/EmailCaptureForm';
import { CommunityActivity } from '@/components/community/CommunityActivity';
import { SlackIntegration } from '@/components/community/SlackIntegration';
import { CommunityBenefits } from '@/components/community/CommunityBenefits';
import { UserTierBadge } from '@/components/community/UserTierBadge';
import { CommunityFeed } from '@/components/community/CommunityFeed';
import { ChannelPreview } from '@/components/community/ChannelPreview';
import { CommunityStats } from '@/components/community/CommunityStats';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Community() {
  const { user } = useAuth();
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [captureType, setCaptureType] = useState<'assessment' | 'template' | 'report'>('assessment');
  
  // For demo purposes - in production this would come from user's subscription
  const userTier: 'explorer' | 'starter' | 'growth' | 'enterprise' = user ? 'starter' : 'explorer';

  const handleEmailCapture = (type: 'assessment' | 'template' | 'report') => {
    setCaptureType(type);
    setShowEmailCapture(true);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            {user && (
              <div className="mb-6 flex justify-center">
                <UserTierBadge tier={userTier} />
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Your Founder Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {user 
                ? "Connect with 75+ founders building life-first businesses. Access level based on your plan."
                : "Join 75+ UK founders building life-first businesses with peer support and AI insights"
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {user ? (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-400 text-purple-300 hover:bg-purple-900/20"
                  onClick={() => document.getElementById('slack-integration')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Slack Community
                </Button>
              ) : (
                <>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3"
                    asChild
                  >
                    <Link to="/auth">Join Free</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-purple-400 text-purple-300 hover:bg-purple-900/20"
                    onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See Member Benefits
                  </Button>
                </>
              )}
            </div>

            {/* Community Stats */}
            <CommunityStats />
          </div>
        </div>
      </section>

      {/* Slack Integration Section */}
      {user && (
        <section id="slack-integration" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <SlackIntegration userTier={userTier} />
              <ChannelPreview userTier={userTier} />
            </div>
          </div>
        </section>
      )}

      {/* Community Feed */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <CommunityFeed userTier={userTier} isAuthenticated={!!user} />
        </div>
      </section>

      {/* User Benefits Section */}
      {user && (
        <section id="benefits" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <CommunityBenefits userTier={userTier} />
          </div>
        </section>
      )}

      {/* Lead Capture Section - only for non-users */}
      {!user && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Free Resources for Founders
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-gray-700 hover:border-purple-500 transition-colors cursor-pointer p-6 rounded-lg" onClick={() => handleEmailCapture('assessment')}>
                <h3 className="text-purple-400 text-xl font-semibold mb-2">Founder Wellness Assessment</h3>
                <p className="text-gray-400 mb-4">Discover your burnout risk and get a personalized action plan</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Free Assessment</Button>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 hover:border-pink-500 transition-colors cursor-pointer p-6 rounded-lg" onClick={() => handleEmailCapture('template')}>
                <h3 className="text-pink-400 text-xl font-semibold mb-2">90-Day Roadmap Template</h3>
                <p className="text-gray-400 mb-4">The exact template successful founders use to scale sustainably</p>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Download Template</Button>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer p-6 rounded-lg" onClick={() => handleEmailCapture('report')}>
                <h3 className="text-blue-400 text-xl font-semibold mb-2">UK SME Benchmark Report 2025</h3>
                <p className="text-gray-400 mb-4">Quarterly insights and benchmarks from UK's fastest-growing SMEs</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Report</Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Community Activity */}
      <CommunityActivity />

      {/* Email Capture Modal */}
      {showEmailCapture && (
        <EmailCaptureForm
          title={
            captureType === 'assessment' ? 'Get Your Founder Wellness Assessment' :
            captureType === 'template' ? 'Download 90-Day Roadmap Template' :
            'Get UK SME Benchmark Report 2025'
          }
          description={
            captureType === 'assessment' ? 'Discover your burnout risk and get a personalized action plan to build a sustainable business.' :
            captureType === 'template' ? 'The exact template successful founders use to scale sustainably without burning out.' :
            'Quarterly insights and benchmarks from the UK\'s fastest-growing SMEs.'
          }
          resourceType={captureType}
          onSuccess={() => setShowEmailCapture(false)}
          onClose={() => setShowEmailCapture(false)}
        />
      )}
    </div>
  );
}
