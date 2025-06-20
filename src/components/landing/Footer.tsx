import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const footerSections: Record<string, FooterSection> = {
    product: {
      title: 'Product',
      links: [
        { label: 'Platform Overview', href: '/platform' },
        { label: 'Meet the Board', href: '/meet-the-board' },
        { label: 'The 365 Method', href: '/365-method' },
        { label: 'Integrations', href: '/integrations' },
        { label: 'Pricing', href: '/pricing' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'ROI Calculator', href: '/roi-calculator' },
        { label: 'Success Stories', href: '/success-stories' },
        { label: 'Help Center', href: '/help' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    },
    connect: {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: 'https://linkedin.com/company/oracle-method', external: true },
        { label: 'Twitter/X', href: 'https://twitter.com/oracle_method', external: true },
        { label: 'Newsletter Signup', href: '/newsletter' },
        { label: 'Book a Demo', href: '/demo' }
      ]
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-white font-semibold text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                      >
                        {link.label === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                        {link.label === 'Twitter/X' && <Twitter className="w-4 h-4" />}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            <h3 className="text-white font-semibold text-lg mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest insights on building sustainable businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/94b9115e-a5a7-424c-910a-34701a9b8e97.png" 
              alt="Oracle Consulting Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-white">Oracle Method</span>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Oracle Consulting. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              oracleconsulting.ai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
