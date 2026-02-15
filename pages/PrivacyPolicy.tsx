
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500">Effective Date: October 2024</p>
      </div>
      
      <div className="space-y-10 text-slate-600 leading-relaxed text-lg">
        <p>
          Fundrivaq (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you use the Fundrivaq platform, including our website, services, and related features.
        </p>
        <p className="bg-slate-50 p-6 rounded-2xl border border-slate-200">By accessing or using Fundrivaq, you agree to the practices described in this Privacy Policy.</p>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>We collect information to provide and improve our services, ensure security, and comply with legal obligations.</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">1.1 Information You Provide</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Account information (name, username, email address, password)</li>
                <li>Profile details (optional bio, profile image, donation links)</li>
                <li>Campaign information (descriptions, images, videos, updates)</li>
                <li>Payment and payout details (processed securely by payment providers)</li>
                <li>Communications with us (support requests, feedback, emails)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">1.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Device and browser information</li>
                <li>IP address and approximate location</li>
                <li>Usage data (pages visited, actions taken, time spent)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">1.3 Donation Information</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Donation amount, currency, date, and transaction status</li>
                <li>Donor message or appreciation note (if provided)</li>
                <li>Anonymous donation status (if selected)</li>
              </ul>
            </div>
          </div>
          <p className="italic text-slate-500">We do not store full credit card details or sensitive payment credentials on our servers.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <p>We use your information to: Create and manage user accounts, process donations and payouts, operate and improve fundraising campaigns, provide support, prevent fraud, and comply with legal requirements.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">3. Payment Processing</h2>
          <p>All payments are processed through trusted third-party payment providers. These providers handle your payment information in accordance with their own privacy and security standards. Fundrivaq only receives limited transaction details necessary to operate the platform.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">4. Sharing of Information</h2>
          <p>We do not sell your personal data. We may share information only when necessary with payment processors, service providers, analytics, and infrastructure partners to deliver our services.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">13. Contact Us</h2>
          <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
            <p className="font-bold text-emerald-900 mb-2">If you have questions, concerns, or requests regarding this Privacy Policy:</p>
            <p className="text-emerald-700">Email: privacy@fundrivaq.com</p>
            <p className="text-emerald-700">Website: www.fundrivaq.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
