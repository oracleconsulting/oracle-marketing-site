import React from 'react';
import { FaChartBar, FaArrowRight } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accountancy Portal - Oracle AI',
  description: 'Transform your accountancy practice with AI-powered insights, automation, and client engagement tools. Join the future of accountancy today.',
  keywords: 'accountancy, ai, oracle ai, accounting automation, client portal, insights',
};

export default function AccountancyLandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6">
      <div className="max-w-2xl w-full bg-white/90 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-4 text-blue-700">
          <FaChartBar size={32} />
          <h1 className="text-3xl font-bold tracking-tight">Accountancy Portal</h1>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Supercharge your practice with real-time AI insights, automated reporting, and seamless client collaboration. Oracle AI empowers accountants to deliver more value, faster.
        </p>
        <ul className="text-left text-gray-600 mb-8 space-y-2">
          <li>• Automated client onboarding & document collection</li>
          <li>• AI-driven financial health checks</li>
          <li>• Secure, branded client portal</li>
          <li>• Instant board-level reports</li>
          <li>• Integrates with Xero, QuickBooks, and more</li>
        </ul>
        <a
          href="https://app.oracleai.co.uk/accountancy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all text-lg"
        >
          Go to Dashboard <FaArrowRight />
        </a>
      </div>
    </main>
  );
} 